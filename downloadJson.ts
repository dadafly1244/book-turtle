//downloadJson.ts

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import fs from "fs"; // 파일 시스템 모듈 추가
import "dotenv/config";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const credential = require("./credential.json");

const serviceAccountAuth = new JWT({
  email: credential.client_email,
  key: credential.private_key,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

// 구글 시트 조회 및 데이터 추출
const getGoogleSheetData = async () => {
  try {
    const doc = new GoogleSpreadsheet(
      "1AwvvngdRbGGbVQaMmENYkjhbwN2iqIcc6ng9xwGkV28",
      serviceAccountAuth
    );
    await doc.loadInfo();
    console.log("스프레드시트 제목:", doc.title);

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    // 한국어와 영어 데이터를 저장할 중첩 객체
    const koData: Record<string, any> = {};
    const enData: Record<string, any> = {};

    // 각 행을 순회하면서 계층 구조 데이터 구성
    rows.forEach((row) => {
      const key = row.get("key")?.trim() || "";
      const koValue = row.get("ko")?.trim() || "";
      const enValue = row.get("en")?.trim() || "";

      // key를 . 기준으로 분리 (예: "HomePage.title" -> ["HomePage", "title"])
      const [section, field] = key.split(".");

      // 한국어 데이터 구성
      if (!koData[section]) {
        koData[section] = {};
      }
      koData[section][field] = koValue;

      // 영어 데이터 구성
      if (!enData[section]) {
        enData[section] = {};
      }
      enData[section][field] = enValue;
    });

    return {
      ko: koData,
      en: enData,
    };
  } catch (error) {
    console.error("Error accessing spreadsheet:", error);
    throw error;
  }
};

// JSON 파일 저장 함수는 그대로 유지
const saveJsonFile = (jsonData: any, fileName: string) => {
  fs.writeFileSync(fileName, JSON.stringify(jsonData, null, 2));
  console.log(`${fileName} 파일이 성공적으로 저장되었습니다.`);
};

// 메인 함수
const main = async () => {
  try {
    const { en, ko } = await getGoogleSheetData();
    saveJsonFile(ko, "./messages/ko.json");
    saveJsonFile(en, "./messages/en.json");
    console.log("번역 데이터 다운로드 완료!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

main();
