import AnnouncementImg from '../assets/icons8-bullhorn_megaphone 1.png'


const Announcement = () => {
  return (
    <div className="announmentBox">
      <img src={AnnouncementImg} alt="" className="announcementImg" />
      <h4>[Announcement]</h4>
      <h5>Announcement on opening Near deposit and lending (25-03-18)</h5>
    </div>
  )
}

export default Announcement
