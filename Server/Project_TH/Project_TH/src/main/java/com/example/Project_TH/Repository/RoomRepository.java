package com.example.Project_TH.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project_TH.Models.Room;

public interface RoomRepository extends JpaRepository<Room,Long> {
    
    
}
