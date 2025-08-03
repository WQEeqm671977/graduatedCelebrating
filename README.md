# graduatedCelebrating
Graduation Scanning System

ระบบสแกนรับปริญญา (Graduation Scanning System)
Overview
ระบบนี้มีเป้าหมายเพื่อใช้ในการตรวจสอบและบันทึกเวลาการเข้ารับปริญญาของบัณฑิต โดยใช้เทคโนโลยี RFID Scanner หรือกล้องจับภาพหน้าบัณฑิต แล้วส่งข้อมูลไปยัง Backend เพื่อบันทึกเวลาเข้า-ออก พร้อมแสดงผลแบบเรียลไทม์บนหน้าจอประกาศชื่อ

Architecture
ส่วน	เทคโนโลยี	รายละเอียด
Frontend	React + TailwindCSS	หน้าจอผู้ใช้ สแกนบัตร RFID, แสดงชื่อผู้รับปริญญา, รายงานย้อนหลัง
Backend	AdonisJS (REST API)	API สำหรับบันทึก, ดึงข้อมูลบัณฑิต, บันทึกเวลาการเข้า-ออก
Database	MySQL / MariaDB	ตารางบัณฑิต, ตารางบันทึกเวลาเข้า-ออก
IoT Device	RFID Reader / Camera	อุปกรณ์สแกนบัตรหรือจับภาพส่งข้อ