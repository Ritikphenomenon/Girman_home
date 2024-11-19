import { useState } from "react";

const App = ({ firstname, lastname, city, contact }) => {
  const [showModal, setShowModal] = useState(false);

  const handleFetchDetails = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Inline styles as objects
  const styles = {
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "250px",
      padding: "10px",
      margin: "5px ",
      fontFamily: "Arial, sans-serif",
    },
    profileImage: {
      display: "block",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
    },
    name: {
      fontSize: "20px",
      color: "#333",
      letterSpacing: "1px",
    },
    location: {
      display: "flex",
      color: "#777",
      fontSize: "14px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "15px",
    },
    phone: {
      color: "#555",
      fontSize: "14px",
    },
    fetchButton: {
      backgroundColor: "#18181B",
      color: "#fff",
      border: "none",
      padding: "8px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.3s ease",
    },
    fetchButtonHover: {
      backgroundColor: "#18181B",
    },
    modalOverlay: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    element:{
        width: "424px",
       height: "17px",
       fontFamily: "Inter",
       fontWeight: 400,
       fontSize: "14px",
    },
    modal: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "15px",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    elementStyle : {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        color:"#71717A"
      },
  };

  return (
    <div style={styles.card}>
      {/* Profile Image */}
      <img
        src="image.png"
        alt={`${firstname} ${lastname}`}
        style={styles.profileImage}
      />

      {/* Name */}
      <h3 style={styles.name}>
        {firstname} <span>{lastname}</span>
      </h3>

      {/* Location */}
      <div style={styles.location}>
        <img src="location.png" alt="" />
        <span style={{marginLeft:"5px"}}>{city}</span>
      </div>

      {/* Contact and Fetch Button */}
      <div style={styles.footer}>
        <p style={styles.phone}><img src="phone.png" alt="" /> {contact}</p>
        <button
          style={styles.fetchButton}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.fetchButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.fetchButton.backgroundColor)
          }
          onClick={handleFetchDetails}
        >
          Fetch Details
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 > Fetch Details</h2>
            <p  style={styles.elementStyle}>Here are the details of following employee</p>
            <p >
              Name:{firstname} {lastname}
            </p>
            <p >Location:{city}</p>
            <p >Phone:{contact}</p>
            <p>Profile Image:</p>
            <p><img src="rectangle.png" style={{height:"100px",width:"100px"}}alt="" /></p>
            <button style={{ marginLeft: "auto", display: "block" }} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
