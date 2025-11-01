import React from "react";
import "./Home.css";
import { FaFacebook, FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { MdOndemandVideo, MdStorefront, MdGroups } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";

function Home() {
  const contacts = [
    "Eric Jones",
    "Cynthia Lopez",
    "Betty Chen",
    "Tina Lim",
    "Molly Carter",
  ];

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <FaFacebook size={33} color="#1877F2" id="logo" />
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="nav-center">
          <FaHome size={22} className="active" id="home" />
          <MdOndemandVideo size={22} id="video" />
          <MdStorefront size={22} id="market" />
          <MdGroups size={22} id="people" />
          <img
            src="https://img.icons8.com/badges/200/facebook-gaming.png"
            alt="gaming"
            width={21}
            height={21}
            style={{ marginTop: "8px" }}
            id="something"
          />
        </div>
        <div className="nav-right">
          <img
            src="https://i.pravatar.cc/40?img=9"
            alt="profile"
            className="profile-pic"
          />
          <label>Josephine Williams</label>
          <FaFacebookMessenger size={22} id="messenger" />
          <FaBell size={22} id="notification"/>
          <IoMdArrowDropdown size={22} id="drop"/>
        </div>
      </nav>

      <div className="main">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-item">
            <img
              src="https://i.pravatar.cc/40?img=9"
              alt="me"
              className="profile-pic"
            />
            <p>Josephine Williams</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4406/4406124.png"
              alt="watch"
              width={24}
              height={26}
            />
            <p>Watch</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://images.vexels.com/media/users/3/223406/isolated/preview/cb0f43285fb4c97c7236772b17e6c268-star-icon-flat.png"
              alt="events"
              width={24}
              height={26}
            />
            <p>Events</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://images.vexels.com/media/users/3/223162/isolated/preview/5e80533c664d40856e255cc8d5c7e00e-flat-people-icon-design.png?w=360"
              alt="friends"
              width={24}
              height={26}
            />
            <p>Friends</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://p7.hiclipart.com/preview/938/444/1022/computer-icons-icon-design-history-three-dimensional-medical-icon-design-material.jpg"
              alt="memories"
              width={24}
              height={26}
            />
            <p>Memories</p>
          </div>
          <button style={{ color: "black", width: "98%", backgroundColor: "#ebebebff" }}>
            See More
          </button>
          <hr />
          <h4 className="shortcut-title">Shortcuts</h4>
          <div className="sidebar-item">
            <img
              src="https://picsum.photos/40/40?1"
              alt="shortcut1"
              className="profile-pic"
            />
            <p>Pomeroy Theatre</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://picsum.photos/40/40?2"
              alt="shortcut2"
              className="profile-pic"
            />
            <p>Weekend Trips</p>
          </div>
          <div className="sidebar-item">
            <img
              src="https://picsum.photos/40/40?3"
              alt="shortcut3"
              className="profile-pic"
            />
            <p>Jasper’s Market</p>
          </div>
          <button style={{ color: "black", width: "98%", backgroundColor: "#ecececff" }}>
            See More
          </button>
        </div>

        {/* Feed */}
        <div className="feed">
          {/* Stories */}
          <div className="story-section">
            <div className="story add-story">
              <div className="story-profile" style={{boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                <img src="https://i.pravatar.cc/40?img=9" alt="me" />
              </div>
              <span className="story-name">Add to Story</span>
            </div>
            

            <div className="story">
              <img src="https://i.pravatar.cc/200?img=2" alt="story" />
              <div className="story-profile">
                <img src="https://i.pravatar.cc/40?img=7" alt="profile" />
              </div>
              <span className="story-name">Alen Kein</span>
            </div>
            <div className="story">
              <img src="https://i.pravatar.cc/200?img=10" alt="story" />
              <div className="story-profile">
                <img src="https://i.pravatar.cc/40?img=10" alt="profile" />
              </div>
              <span className="story-name">Tom Russo</span>
            </div>

            <div className="story">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay loop muted />
              <div className="story-profile">
                <img src="https://i.pravatar.cc/40?img=11" alt="profile" />
              </div>
              <span className="story-name">Betty Chen</span>
            </div>

            <div className="story">
              <img src="https://i.pravatar.cc/200?img=12" alt="story" />
              <div className="story-profile">
                <img src="https://i.pravatar.cc/40?img=12" alt="profile" />
              </div>
              <span className="story-name">Dennis Han</span>
            </div>
          </div>

          {/* Create Post */}
          <div className="create-post">
            <img
              src="https://i.pravatar.cc/40?img=9"
              alt="me"
              className="profile-pic"
            />
            <input type="text" placeholder="What's on your mind, Josephine?" />
          </div>
          <div className="post-actions">
            <button style={{ color: "black" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6861/6861310.png"
                width={20}
                height={20}
                alt="photo-video"
              />
              Photo/Video
            </button>
            <button style={{ color: "black" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8188/8188390.png"
                width={20}
                height={20}
                alt="tag-friends"
              />
              Tag Friends
            </button>
            <button style={{ color: "black" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbO5T-XjwHLvCHZkpO_0j9sXG1G2QH3RhJZGzJov2fCp_iASVF5wT5jo-nGNS9j3Xgp3g&usqp=CAU"
                width={20}
                height={20}
                alt="feeling-activity"
              />
              Feeling/Activity
            </button>
          </div>

          {/* Example Post 1 */}
          <div className="post">
            <div className="post-header">
              <img
                src="https://i.pravatar.cc/40?img=15"
                alt="profile"
                className="profile-pic"
              />
              <div style={{ lineHeight: "17px" }}>
                <p>
                  <b>Fiona Ozeri </b>
                  <br />
                  <span style={{ fontSize: "0.7rem", display: "flex", alignItems: "center", gap: "4px" }}>
                    5 hrs · <FaUserFriends size={14} />
                  </span>
                </p>
              </div>
            </div>
            <p className="post-text">Best fireworks show I’ve ever seen!</p>
            <img
              src="https://picsum.photos/600/300"
              alt="post"
              className="post-img"
            />
            <div className="post-actions">
              <LikeButton />
              <CommentButton />
              <ShareButton />
            </div>

            {/* --- Comment Section --- */}
            <div className="comment-box">
              <img
                src="https://i.pravatar.cc/40?img=9"
                alt="me"
                className="profile-pic"
              />
              <input type="text" placeholder="Write a comment..." />
            </div>
          </div>

          {/* Example Post 2 */}
          <div className="post">
            <div className="post-header">
              <img
                src="https://picsum.photos/40/40?1"
                alt="profile"
                className="profile-pic"
              />
              <div style={{ lineHeight: "17px" }}>
                <p>
                  <b>Fiona Ozeri </b>
                  <br />
                  <span style={{ fontSize: "0.7rem", display: "flex", alignItems: "center", gap: "4px" }}>
                    3 hrs · <FaUserFriends size={14} />
                  </span>
                </p>
              </div>
            </div>
            <p className="post-text">It's simply beautiful</p>
            <video className="post-img" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="post-actions">
              <LikeButton />
              <CommentButton />
              <ShareButton />
            </div>

            {/* --- Comment Section --- */}
            <div className="comment-box">
              <img
                src="https://i.pravatar.cc/40?img=9"
                alt="me"
                className="profile-pic"
              />
              <input type="text" placeholder="Write a comment..." />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="contacts">
          <h4>Contacts</h4>
          {contacts.map((c, i) => (
            <div key={i} className="contact">
              <img
                src={`https://i.pravatar.cc/40?img=${i + 20}`}
                alt={c}
                className="profile-pic"
              />
              <p>{c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;