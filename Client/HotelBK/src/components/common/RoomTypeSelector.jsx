import { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/apiFunctions";

const RoomTypeSelector = (handleRoomInputChange, newRoom) => {
  const [roomTypes, setRoomTypes] = useState([""]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  // have a trouble with use effects
  useEffect(() => {
    getRoomTypes()
      .then((data) => {
        if (Array.isArray(data)) {
          setRoomTypes(data);
        } else {
          console.error("Expected array from getRoomTypes");
        }
      })
      .catch((error) => console.error("Error fetching room types:", error));
  }, []);

  const handleNewRoomInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType != "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
    }
  };

  return (
    <>
      {roomTypes.length > 0 && (
        <div>
          <select
            id="roomType"
            name="roomType"
            value={newRoom.roomTypes}
            onChange={(e) => {
              if (e.target.value === "Add New") {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
          >
            {/* handle  new type room  */}
            <option value={""}>Select a Room Type</option>
            <option value={"Add New"}>Add New</option>
            {/* type before index */}
            {roomTypes.map((type, index) => (
              <option key={type} value={index}>
                {type}
              </option>
            ))}
          </select>
          {showNewRoomTypeInput && (
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a new room type"
                // value={newRoomType}
                onChange={handleNewRoomInputChange}
              />
              <button
                className="btn btn-hotel"
                type="button"
                onClick={handleAddNewRoomType}
              >
                Add New Room Type
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RoomTypeSelector;
