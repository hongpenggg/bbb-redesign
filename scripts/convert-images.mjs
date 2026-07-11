import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE_URL = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets/';
const OUTPUT_DIR = path.resolve('public/assets');

const JPEG_FILES = [
  'MCCY.jpeg',
  'ashton_profile.jpeg',
  'boonhow_profile.jpeg',
  'bootcamp_photo.jpeg',
  'brian_profile.jpeg',
  'changemakersguild.jpeg',
  'cheeheng_profile.jpeg',
  'csm_class_frombackleft_term1.jpeg',
  'educado.jpeg',
  'joel_profile.jpeg',
  'kevin_profile.jpeg',
  'kevin_teaching.jpeg',
  'neil_profile.jpeg',
  'nicholas_profile.jpeg',
  'pann_profile.jpeg',
  'pratik_profile.jpeg',
  'raghav_profile.jpeg',
  'renae_profile.jpeg',
  'scape_class_frombackmiddle_term1.jpeg',
  'scape_class_pannbrianselfie_term1.jpeg',
  'scape_class_pannteaching_term1.jpeg',
  'scape_class_pannteachingzoomed_term1.jpeg',
  'scape_class_term1.jpeg',
  'sgpo.jpeg',
  'soristic.jpeg',
  'stickem.jpeg',
  'suki_profile.jpeg',
  'suki_teaching_whiteboard.jpeg',
  'tutor_debate_session.jpeg',
  'wework.jpeg',
  'wework_class_brianteaching_term1.jpeg',
  'wework_class_frombackleft_term1.jpeg',
  'wework_class_frombackmiddle_term1.jpeg',
  'wework_class_frombackright2_term1.jpeg',
  'wework_class_frombackright_term1.jpeg',
  'wework_class_hackathonfrombackleft_term1.jpeg',
  'wework_class_hackathongroupzoomed_term1.jpeg',
  'wework_class_mrchriszoomed_term1.jpeg',
  'wework_class_mrridzwandiscussionzoomed_term1.jpeg',
  'wework_class_mrridzwanzoomed_term1.jpeg',
  'wework_class_nicholasguiding_term1.jpeg',
  'wework_class_nicholastutoringcloseup_term1.jpeg',
  'wework_class_panelfrombackleft_term1.jpeg',
  'wework_class_panelfrombackright_term1.jpeg',
  'wework_class_panelhongpengzoomed_term1.jpeg',
  'wework_class_pratikteachingzoomed_term1.jpeg',
  'wework_class_term1.jpeg',
  'wework_class_wholepanel_term1.jpeg',
  'yixiang_profile.jpeg',
  'zoomed_in_kevin_teaching.jpeg',
];

const PNG_FILES = [
  'MCCY_profile.png',
  'bagus_together.png',
  'csm_academy.png',
  'dibs.png',
  'logo.png',
  'msf.png',
  'nvpc.png',
  'scape.png',
  'sgsocialsupport.png',
  'tote_board.png',
  'vjc.png',
];

const WEBP_FILES = ['clubrainbow.webp', 'temasek_foundation.webp'];

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function downloadFile(fileName) {
  const response = await fetch(`${BASE_URL}${fileName}`);
  if (!response.ok) {
    throw new Error(`Failed to download ${fileName}: ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

function toWebpName(fileName) {
  return `${fileName.replace(/\.[^.]+$/, '')}.webp`;
}

function formatSavings(originalSize, outputSize) {
  const savings = ((1 - outputSize / originalSize) * 100).toFixed(1);
  return `${savings}%`;
}

async function processFile(fileName, quality) {
  const originalBuffer = await downloadFile(fileName);
  const outputName = toWebpName(fileName);
  const outputPath = path.join(OUTPUT_DIR, outputName);

  const outputBuffer = quality
    ? await sharp(originalBuffer).webp({ quality }).toBuffer()
    : originalBuffer;

  await writeFile(outputPath, outputBuffer);

  console.log(
    `${fileName} -> ${outputName}: ${formatBytes(originalBuffer.length)} -> ${formatBytes(outputBuffer.length)} (${formatSavings(
      originalBuffer.length,
      outputBuffer.length,
    )})`,
  );
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const fileName of JPEG_FILES) {
    await processFile(fileName, 82);
  }

  for (const fileName of PNG_FILES) {
    await processFile(fileName, 90);
  }

  for (const fileName of WEBP_FILES) {
    await processFile(fileName);
  }

  console.log('Done.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
