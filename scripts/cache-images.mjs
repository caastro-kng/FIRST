import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUTPUT_DIR = path.resolve('public/images/site');

const images = [
  ['hero-championship.jpg', 'https://community.firstinspires.org/hubfs/first-blog_community_cmpupdates2-024.jpg'],

  ['league-fll.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2026/06_junho/3-6-2026__Sesi_GAMA_Torneio_Interno_de_Rob%C3%B3tica_FLLC_Foto_Victor_Hugo_Pessoa_CAPA-16.jpg'],
  ['league-ftc.jpg', 'https://community.firstinspires.org/hubfs/preview%20event.jpg'],
  ['league-frc.jpg', 'https://community.firstinspires.org/hubfs/blog/frc/2025-robot-rules-preview-for-2026.jpg'],

  ['journey-01.jpg', 'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0312.jpg?height=1260&name=20230420_bm_0312.jpg&width=1890'],
  ['journey-02.webp', 'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0446_1.webp?name=20230420_bm_0446_1.webp&width=2000'],
  ['journey-03.webp', 'https://www.firstinspires.org/hs-fs/hubfs/frc_getstarted_1260hero.webp?height=840&name=frc_getstarted_1260hero.webp&width=1260'],
  ['journey-04.png', 'https://community.firstinspires.org/hs-fs/hubfs/undefined-Mar-09-2026-05-09-00-4625-PM.png?height=830&name=undefined-Mar-09-2026-05-09-00-4625-PM.png&width=638'],

  ['season-01.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_corpo.jpg'],
  ['season-02.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2026/06_junho/3-6-2026__Sesi_GAMA_Torneio_Interno_de_Rob%C3%B3tica_FLLC_Foto_Victor_Hugo_Pessoa_CAPA-31.jpg'],
  ['season-03.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_2.jpg'],
  ['season-04.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_1.jpg'],
  ['season-05.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2024/Fevereiro/EQUIPE_FRC_-_Robots_District_-_Taguatinga_-_Foto_Bruno_Frauzino_3.jpg'],
  ['season-06.jpg', 'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/04-abril/29-04-2026_Equipe_Robots_District_Foto_Dayane_dos_Santos_Sistema_Fibra.jpg'],
  ['season-07.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/16-04-FRC-Samira-Padua-Sistema-Fibra-1.jpg'],

  ['competition-arena.webp', 'https://www.firstinspires.org/hs-fs/hubfs/image-library/web/20250417dan1701-1260x840.webp?height=840&name=20250417dan1701-1260x840.webp&width=1260'],
  ['competition-pits.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/16-04-FRC-Samira-Padua-Sistema-Fibra-2.jpg'],

  ['brazil-9484.jpg', 'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/02-fevereiro/23-1-2026_Equipes_FRC_-_Foto_Bruno_Frauzino-2827_ROBOTS_DISTRICT.jpg'],
  ['brazil-houston.jpg', 'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/05-maio/RobotsDistrict-no-First-Championship-2026-FotoDayanedosSantos-SistemaFibra-1.5.jpg'],
  ['brazil-federal-force.jpg', 'https://www.sistemafibra.org.br/sesi/images/categorias/noticias/2025/04_abril/interna-Foto-SamiraPadua-SistemaFibra1.jpg'],
];

await mkdir(OUTPUT_DIR, { recursive: true });

const download = async ([filename, url]) => {
  try {
    const response = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0 FIRST educational website build' },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length < 1024) throw new Error('arquivo recebido é pequeno demais');

    await writeFile(path.join(OUTPUT_DIR, filename), buffer);
    console.log(`✓ ${filename} (${Math.round(buffer.length / 1024)} KB)`);
  } catch (error) {
    console.warn(`⚠ ${filename}: não foi possível armazenar localmente (${error.message}). O fallback externo continuará disponível.`);
  }
};

await Promise.all(images.map(download));
