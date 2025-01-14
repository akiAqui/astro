import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
export const TimeStamp = () => {
  // 現在のファイルパスを取得
  const pth = fileURLToPath(import.meta.url);
  //console.log(`File Path: ${pth}`);
  
  // ファイルのメタデータを取得
  const stats = fs.statSync(pth);
  //console.log(`Stats: ${JSON.stringify(stats)}`);
  
  // 更新日時を取得
  const lastModified = new Date(stats.mtime);

  // 日本時間でフォーマット (例: 2025年01月03日 22:33)
  const year = lastModified.getFullYear();
  const month = String(lastModified.getMonth() + 1).padStart(2, '0');
  const day = String(lastModified.getDate()).padStart(2, '0');
  const hours = String(lastModified.getHours()).padStart(2, '0');
  const minutes = String(lastModified.getMinutes()).padStart(2, '0');
  const formattedDate = `${year}年${month}月${day}日 ${hours}:${minutes}`;

  //console.log(`Formatted Date: ${formattedDate}`);

  // 表示
  return (
    <div>
      <p>最終更新日時: {formattedDate}</p>
    </div>
  );
};
