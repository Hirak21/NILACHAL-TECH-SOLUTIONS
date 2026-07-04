"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

export function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 80, 40, 60);
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const height =
        Math.sin(x * 0.3) * 1.5 +
        Math.cos(y * 0.2) * 2.0 +
        Math.sin(x * 0.1 + y * 0.15) * 3.0 +
        Math.pow(Math.sin(x * 0.05) * Math.cos(y * 0.08), 2) * 4.0;

      pos.setZ(i, height);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#132a23"),
        roughness: 0.9,
        metalness: 0.0,
        flatShading: true,
      }),
    []
  );

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, -10]}
    />
  );
}

export function Hills() {
  const hills = useMemo(
    () => [
      { pos: [-12, -1, -25] as [number, number, number], scale: 12 },
      { pos: [15, -1, -30] as [number, number, number], scale: 15 },
      { pos: [-8, -1, -40] as [number, number, number], scale: 10 },
      { pos: [10, -1, -35] as [number, number, number], scale: 8 },
    ],
    []
  );

  return (
    <group>
      {hills.map((hill, i) => (
        <mesh key={i} position={hill.pos}>
          <coneGeometry args={[hill.scale, hill.scale * 1.5, 6]} />
          <meshStandardMaterial
            color="#1a3d2e"
            flatShading
            roughness={0.85}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Road() {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -1.5, 5),
      new THREE.Vector3(-2, -1.5, 0),
      new THREE.Vector3(0, -1.5, -5),
      new THREE.Vector3(3, -1.5, -10),
      new THREE.Vector3(0, -1.5, -15),
      new THREE.Vector3(-3, -1.5, -20),
      new THREE.Vector3(0, -1.5, -25),
      new THREE.Vector3(2, -1.5, -30),
      new THREE.Vector3(0, -1.5, -35),
      new THREE.Vector3(-2, -1.5, -40),
      new THREE.Vector3(0, -1.5, -45),
      new THREE.Vector3(1, -1.5, -50),
    ]);
  }, []);

  const roadGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.6, 0);
    shape.lineTo(0.6, 0);
    shape.lineTo(0.6, 0.05);
    shape.lineTo(-0.6, 0.05);
    shape.closePath();

    const extrudeSettings = {
      steps: 120,
      extrudePath: curve,
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [curve]);

  const linePoints = useMemo(() => {
    return curve.getPoints(120).map((p) => [p.x, p.y, p.z] as [number, number, number]);
  }, [curve]);

  return (
    <group>
      <mesh geometry={roadGeo}>
        <meshStandardMaterial
          color="#2a2a2a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      <Line
        points={linePoints}
        color="#d6a936"
        lineWidth={1}
        opacity={0.3}
        transparent
      />
    </group>
  );
}

export function GoldenSignal({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -1.4, 5),
        new THREE.Vector3(-2, -1.4, 0),
        new THREE.Vector3(0, -1.4, -5),
        new THREE.Vector3(3, -1.4, -10),
        new THREE.Vector3(0, -1.4, -15),
        new THREE.Vector3(-3, -1.4, -20),
        new THREE.Vector3(0, -1.4, -25),
        new THREE.Vector3(2, -1.4, -30),
        new THREE.Vector3(0, -1.4, -35),
        new THREE.Vector3(-2, -1.4, -40),
        new THREE.Vector3(0, -1.4, -45),
        new THREE.Vector3(1, -1.4, -50),
      ]),
    []
  );

  useFrame(() => {
    if (ref.current) {
      const point = curve.getPoint(Math.min(progress, 0.99));
      ref.current.position.copy(point);
    }
    if (glowRef.current && ref.current) {
      glowRef.current.position.copy(ref.current.position);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color="#d6a936" />
      </mesh>
      <pointLight
        ref={glowRef}
        color="#d6a936"
        intensity={3}
        distance={8}
        decay={2}
      />
    </group>
  );
}

export function Vegetation() {
  const trees = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * 50;
      const z = Math.random() * -55 - 5;
      const distFromRoad = Math.abs(x);
      if (distFromRoad > 3) {
        positions.push([x, -1, z]);
      }
    }
    return positions;
  }, []);

  return (
    <group>
      {trees.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[0.4 + Math.random() * 0.3, 1.5 + Math.random(), 5]} />
            <meshStandardMaterial
              color="#1a3d2e"
              flatShading
              roughness={0.9}
              metalness={0}
            />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.6, 4]} />
            <meshStandardMaterial color="#4a3520" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function Mist() {
  const ref = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#132a23",
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(clock.elapsedTime * 0.1) * 2;
    }
  });

  return (
    <mesh ref={ref} position={[0, 3, -20]} material={material}>
      <planeGeometry args={[80, 20]} />
    </mesh>
  );
}

export function ServiceCheckpoints({ progress }: { progress: number }) {
  const checkpoints = [
    { pos: [0, -0.5, -5] as [number, number, number], label: "Presence" },
    { pos: [3, -0.5, -15] as [number, number, number], label: "Websites" },
    { pos: [-3, -0.5, -25] as [number, number, number], label: "Systems" },
    { pos: [2, -0.5, -40] as [number, number, number], label: "Automation" },
  ];

  const totalRange = 45;
  const startZ = 5;

  return (
    <group>
      {checkpoints.map((cp, i) => {
        const cpZ = cp.pos[2];
        const threshold = (startZ - cpZ) / totalRange;
        const visible = progress > threshold - 0.05;
        const opacity = visible
          ? Math.min((progress - (threshold - 0.05)) / 0.05, 1)
          : 0;

        return (
          <group key={i} position={cp.pos}>
            <mesh position={[0, 0.6, 0]}>
              <boxGeometry args={[1.2, 0.1, 0.6]} />
              <meshStandardMaterial
                color="#d6a936"
                transparent
                opacity={opacity * 0.8}
                emissive="#d6a936"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[0, 1.2, 0]}>
              <octahedronGeometry args={[0.25]} />
              <meshStandardMaterial
                color="#d6a936"
                transparent
                opacity={opacity}
                emissive="#d6a936"
                emissiveIntensity={0.5}
              />
            </mesh>
            <pointLight
              color="#d6a936"
              intensity={visible ? 2 : 0}
              distance={6}
              decay={2}
              position={[0, 1.5, 0]}
            />
          </group>
        );
      })}
    </group>
  );
}

export function Studio() {
  return (
    <group position={[0, -1.5, -50]}>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[8, 0.8, 6]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.8} />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[7.6, 2.4, 5.6]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh position={[0, 3.5, 0]}>
        <boxGeometry args={[8.4, 0.2, 6.4]} />
        <meshStandardMaterial color="#9b5f42" roughness={0.7} />
      </mesh>
      <mesh position={[0, 2, 2.81]}>
        <planeGeometry args={[5, 2]} />
        <meshStandardMaterial
          color="#132a23"
          transparent
          opacity={0.4}
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>
      <pointLight position={[0, 1.5, 3.5]} color="#d6a936" intensity={1} distance={5} />
      <mesh position={[3.5, 2.8, 2.82]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial color="#d6a936" emissive="#d6a936" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
