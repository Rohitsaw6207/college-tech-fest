import React, { useState } from "react";
import "./css/roomAllocation.css";
import Footer from "../Footer";
import Background from "./Background";
import Background2 from "./Background2";

export const Allocation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([
    { date: "2024-01-10", room: "demo-room", event: "demo-event" },
    { date: "2024-01-11", room: "main-hall", event: "conference" },
    { date: "2024-01-12", room: "auditorium", event: "workshop" },
    { date: "2024-01-13", room: "room-101", event: "seminar" },
    { date: "2024-01-14", room: "room-202", event: "team-meeting" },
    { date: "2024-01-10", room: "demo-room", event: "demo-event" },
    { date: "2024-01-11", room: "main-hall", event: "conference" },
    { date: "2024-01-12", room: "auditorium", event: "workshop" },
    { date: "2024-01-13", room: "room-101", event: "seminar" },
    { date: "2024-01-14", room: "room-202", event: "team-meeting" },
  ]);
  const [isSearched, setIsSearched] = useState(false);

  const data = [
    { date: "2024-01-10", room: "demo-room", event: "demo-event" },
    { date: "2024-01-11", room: "main-hall", event: "conference" },
    { date: "2024-01-12", room: "auditorium", event: "workshop" },
    { date: "2024-01-13", room: "room-101", event: "seminar" },
    { date: "2024-01-14", room: "room-202", event: "team-meeting" },
    { date: "2024-01-10", room: "demo-room", event: "demo-event" },
    { date: "2024-01-11", room: "main-hall", event: "conference" },
    { date: "2024-01-12", room: "auditorium", event: "workshop" },
    { date: "2024-01-13", room: "room-101", event: "seminar" },
    { date: "2024-01-14", room: "room-202", event: "team-meeting" },
  ];

  // Get all unique events from the data
  const eventNames = [...new Set(data.map((item) => item.event))];

  const handleSearch = (event) => {
    const selectedEvent = event.target.value;
    setSearchQuery(selectedEvent);
    const results = data.filter((item) =>
      item.event.toLowerCase().includes(selectedEvent.toLowerCase())
    );
    setFilteredData(results);
    setIsSearched(true);
  };

  return (
    <div>
      <Background />
      <Background2 />
      <div className="pages">
        <div className="segment11">
          <div className="segment11-1">
            <div className="room-allocation-container">
              <h1 className="room-allocation-title">Room Allocation</h1>
              {/* Search Dropdown */}
              <div className="search-container">
                {/* Dropdown for events */}
                <select
                  className="search-dropdown"
                  value={searchQuery}
                  onChange={handleSearch}
                >
                  <option value="">Select Event </option>
                  {eventNames.map((event, index) => (
                    <option key={index} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>
              {/* Table */}
              <div className="room-allocation-table">
                <div className="table-header">
                  <div className="header-item">Date</div>
                  <div className="header-item">Room</div>
                  <div className="header-item">Event</div>
                </div>
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <div
                      key={index}
                      className={`table-row ${
                        index % 2 === 0 ? "slide-from-right" : "slide-from-left"
                      }`}
                    >
                      <div className="row-item">{data.date}</div>
                      <div className="row-item">{data.room}</div>
                      <div className="row-item">{data.event}</div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">No events found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
