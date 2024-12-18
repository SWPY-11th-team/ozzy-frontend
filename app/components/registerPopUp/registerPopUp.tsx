"use client";

import React, { useEffect, useState } from "react";
import styles from "./registerPopUp.module.css";
import { Button } from "../button/Button";

interface RegisterPopUpProps {
  diaryCount: number; // 일기 입력 개수 (옵션, 초기값)
  onClose: () => void; // 팝업 닫기 함수
}

const images = [
  "/registerCount/stamp1.png",
  "/registerCount/stamp2.png",
  "/registerCount/stamp3.png",
  "/registerCount/stamp4.png",
  "/registerCount/stamp5.png",
  "/registerCount/stamp6.png",
  "/registerCount/stamp7.png",
]; // 이미지 배열

export const RecordPopup: React.FC<RegisterPopUpProps> = ({ diaryCount, onClose }) => {
  // 일기 개수에 따른 이미지 선택
  const getImageByDiaryCount = (count: number) => {
    const index = Math.min(count - 1, images.length - 1); // 최대 이미지 수 초과 제한
    return images[index];
  };

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <h1 className={styles.title}>오늘의 감정이 기록되었어요</h1>
        <p className={styles.subtitle}>
          매일 기록할수록 나의 감정과 가까워질 수 있어요
        </p>
        <div className={styles.imageContainer}>
          <img
            src={getImageByDiaryCount(diaryCount)}
            alt={`Emotion level ${diaryCount}`}
            className={styles.image}
          />
        </div>
        <Button
            label="닫기"
            onClick={onClose} // 닫기 동작
        />
      </div>
    </div>
  );
};
