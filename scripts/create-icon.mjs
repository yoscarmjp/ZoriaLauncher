import { mkdir, writeFile } from 'node:fs/promises';

// Small valid 1x1 ICO used as a build-safe fallback icon for Windows.
const dib = Buffer.alloc(40 + 4 + 4);
dib.writeUInt32LE(40, 0);
dib.writeInt32LE(1, 4);
dib.writeInt32LE(2, 8);
dib.writeUInt16LE(1, 12);
dib.writeUInt16LE(32, 14);
dib.writeUInt32LE(0, 16);
dib.writeUInt32LE(4, 20);
dib.writeInt32LE(0, 24);
dib.writeInt32LE(0, 28);
dib.writeUInt32LE(0, 32);
dib.writeUInt32LE(0, 36);
dib.writeUInt32LE(0xffed2939, 40);

const header = Buffer.alloc(6 + 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(1, 6);
header.writeUInt8(1, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(dib.length, 14);
header.writeUInt32LE(header.length, 18);

await mkdir('src-tauri/icons', { recursive: true });
await writeFile('src-tauri/icons/icon.ico', Buffer.concat([header, dib]));
