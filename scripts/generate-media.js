import fs from 'fs';
import path from 'path';

const mediaDir = path.join(process.cwd(), 'public', 'media');
const outputFile = path.join(process.cwd(), 'src', 'mediaList.json');

// Ensure the media directory exists
if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

try {
  const files = fs.readdirSync(mediaDir);
  
  const media = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.mov'].includes(ext);
    })
    .map((file, index) => {
      const ext = path.extname(file).toLowerCase();
      const isVideo = ['.mp4', '.webm', '.mov'].includes(ext);
      
      return {
        id: index + 1,
        src: `/media/${file}`,
        type: isVideo ? 'video' : 'image',
        name: file
      };
    });

  fs.writeFileSync(outputFile, JSON.stringify(media, null, 2));
  console.log(`Successfully generated mediaList.json with ${media.length} items.`);
} catch (error) {
  console.error('Error generating media list:', error);
  process.exit(1);
}
