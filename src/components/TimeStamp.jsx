import fs from 'fs';
import { fileURLToPath } from 'url';

export const TimeStamp = ({ fileUrl }) => {
  // ファイルパスを取得
  const filePath = fileURLToPath(fileUrl);

  // ファイルのメタデータを取得
  const stats = fs.statSync(filePath);
  const lastModified = new Date(stats.mtime);

  // 日付をフォーマット
  const year = lastModified.getFullYear();
  const month = String(lastModified.getMonth() + 1).padStart(2, '0');
  const day = String(lastModified.getDate()).padStart(2, '0');
  const hours = String(lastModified.getHours()).padStart(2, '0');
  const minutes = String(lastModified.getMinutes()).padStart(2, '0');
  const formattedDate = `${year}年${month}月${day}日 ${hours}:${minutes}`;

  // 表示
  return (
    <div>
      <p>最終更新日時: {formattedDate}</p>
    </div>
  );
};

export default TimeStamp;
