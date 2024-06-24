package com.example.Project_TH.service;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.Project_TH.Models.Room;
import com.example.Project_TH.Repository.RoomRepository;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class RoomService implements IRoomService{
    private final RoomRepository roomRepository;
    @Override
    public Room addNewRoom(MultipartFile file, String roomType, BigDecimal roomPrice) throws SerialException, SQLException, IOException {
        Room room = new Room();
        room.setRoomType(roomType);
        room.setRoomPrice(roomPrice);
        if(!file.isEmpty())
        {
            byte[] bytes = file.getBytes();
            Blob photoBlob = new SerialBlob(bytes);
            room.setPhoto(photoBlob);
        }
        return roomRepository.save(room);
    }
    
    
}
