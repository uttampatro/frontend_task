import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function UserData({ user, handleChatToggle }) {
  const position = [51.505, -0.09];

  return (
    <div>
      <div className="profileDetailsBody">
        <div className="profileDetailsHeader">
          <h3>Profile</h3>
          <div onClick={handleChatToggle} className="profileLogout">
            <img className="image" src={user.profilepicture} />
            <p>{user.name}</p>
          </div>
        </div>
        <div className="details">
          <div className="detailsPart1">
            <div style={{ justifyContent: "center" }}>
              <img className="bigImage" src={user.profilepicture} />
              <h3>{user.name}</h3>
            </div>
            <div className="userDetails">
              <h4>
                Username : <span>{user.username}</span>
              </h4>
              <h4>
                e-mail : <span>{user.email}</span>
              </h4>
              <h4>
                Phone : <span>{user.phone}</span>
              </h4>
              <h4>
                Website : <span>{user.website}</span>
              </h4>
            </div>
            <div className="userCompany">
              <h5>Company</h5>
              <h4>
                Name : <span>{user.company?.name}</span>
              </h4>
              <h4>
                catchphrase : <span>{user.company?.catchPhrase}</span>
              </h4>
              <h4>
                bs : <span>{user.company?.bs}</span>
              </h4>
            </div>
          </div>
          <div className="detailsPart2">
            <div className="userCompany">
              <h5>Address</h5>
              <h4>
                Street : <span>{user.address?.street}</span>
              </h4>
              <h4>
                Suite : <span>{user.address?.suite}</span>
              </h4>
              <h4>
                City : <span>{user.address?.city}</span>
              </h4>
              <h4>
                Zipcode : <span>{user.address?.zipcode}</span>
              </h4>
            </div>
            <MapContainer center={position} zoom={13} className="map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}></Marker>
            </MapContainer>
            <div className="latitude">
              <h5>
                Lat : <span>{user.address?.geo?.lat}</span>
              </h5>
              <h5>
                Long : <span>{user.address?.geo?.lng}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;
