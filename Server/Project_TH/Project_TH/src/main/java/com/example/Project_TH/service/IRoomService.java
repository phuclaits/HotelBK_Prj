package com.example.Project_TH.service;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialException;

import org.springframework.web.multipart.MultipartFile;

import com.example.Project_TH.Models.Room;

public interface IRoomService {
    Room addNewRoom(MultipartFile photo,String roomType, BigDecimal roomPrice) throws SerialException, SQLException, IOException;
}
