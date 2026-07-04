"use client";

import { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  Terrain,
  Hills,
  Road,
  GoldenSignal,
  Vegetation,
  Mist,
  ServiceCheckpoints,
  Studio,
} from "./terrain";
import { StaticLandscape } from "./static-landscape";

function CameraRig({
  progress,
  simplified,
}: {
  progress: number;
  simplified?: boolean;
}) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 5, 12));
  const targetLook = useRef(new THREE.Vector3(0, 0, -5));

  useFrame(() => {
    const startZ = 12;
    const endZ = simplified ? -30 : -52;
    const z = startZ + (endZ - startZ) * Math.min(progress, 1);
    const y = simplified
      ? 6
      : 4 + Math.sin(progress * Math.PI) * 2;

    targetPos.current.set(0, y, z + 8);
    targetLook.current.set(0, 0, z - 10);

    camera.position.lerp(targetPos.current, 0.03);
    camera.lookAt(targetLook.current);
  });

  return null;
}

function DesktopScene({ progress }: { progress: number }) {
  return (
    <>
      <ambientLight intensity={0.3} color="#132a23" />
      <directionalLight
        position={[10, 15, 5]}
        intensity={0.6}
        color="#f5f3ee"
      />
      <fog attach="fog" args={["#0a0a0a", 15, 55]} />

      <CameraRig progress={progress} />

      <Terrain />
      <Hills />
      <Road />
      <Vegetation />
      <Mist />
      <GoldenSignal progress={progress} />
      <ServiceCheckpoints progress={progress} />
      <Studio />
    </>
  );
}

function MobileScene({ progress }: { progress: number }) {
  const reducedTrees = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 40;
      const z = Math.random() * -35 - 5;
      if (Math.abs(x) > 3) {
        positions.push([x, -1, z]);
      }
    }
    return positions;
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} color="#132a23" />
      <directionalLight position={[5, 10, 5]} intensity={0.5} color="#f5f3ee" />
      <fog attach="fog" args={["#0a0a0a", 10, 40]} />

      <CameraRig progress={progress} simplified />

      <Terrain />
      <Hills />
      <Road />
      <Mist />
      <GoldenSignal progress={progress} />
      <ServiceCheckpoints progress={progress} />
      <Studio />

      {reducedTrees.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[0.4, 1.5, 5]} />
            <meshStandardMaterial
              color="#1a3d2e"
              flatShading
              roughness={0.9}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

function LoadingState() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-ink)]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-gold)] border-t-transparent" />
        <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
          Loading experience...
        </p>
      </div>
    </div>
  );
}

export function RoadJourney3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionMq.matches);

    const mobileMq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileMq.matches);

    const onMotionChange = () => setReducedMotion(motionMq.matches);
    const onMobileChange = () => setIsMobile(mobileMq.matches);

    motionMq.addEventListener("change", onMotionChange);
    mobileMq.addEventListener("change", onMobileChange);
    return () => {
      motionMq.removeEventListener("change", onMotionChange);
      mobileMq.removeEventListener("change", onMobileChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollH > 0 ? window.scrollY / scrollH : 0;
      setProgress(Math.min(p, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  if (reducedMotion) return <StaticLandscape />;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[var(--z-base)]"
      aria-hidden
    >
      <Suspense fallback={<LoadingState />}>
        <Canvas
          camera={{ position: [0, 5, 12], fov: 50, near: 0.1, far: 100 }}
          dpr={isMobile ? [1, 1] : [1, 1.5]}
          gl={{ antialias: !isMobile, alpha: true }}
          style={{ background: "transparent" }}
        >
          {isMobile ? (
            <MobileScene progress={progress} />
          ) : (
            <DesktopScene progress={progress} />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
}
