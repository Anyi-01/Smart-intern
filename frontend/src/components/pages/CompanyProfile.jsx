import Icon from "../ui/Icon";

export default function CompanyProfile() {
  return (
    <div className="pc">
      <div className="ph" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1>Company Profile</h1>
          <p>Manage your company information</p>
        </div>
        <button className="bedit">Edit Profile</button>
      </div>

      <div className="pgrid">
        {/* Left */}
        <div className="pl">
          <div className="card ppc">
            <div className="pav">🏢</div>
            <h3>TechCorp Inc.</h3>
            <span className="pe">hr@techcorp.com</span>
            <button className="bcp">
              <Icon name="upload" size={14} /> Change Logo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="pr">
          <div className="card">
            <div className="stitle">
              <Icon name="building" size={18} />
              Company Information
            </div>
            <div className="fgrid">
              <div className="ff">
                <label>Company Name</label>
                <input defaultValue="TechCorp Inc." />
              </div>
              <div className="ff">
                <label>Industry</label>
                <input defaultValue="Technology" />
              </div>
              <div className="ff">
                <label>Location</label>
                <input defaultValue="San Francisco, CA" />
              </div>
              <div className="ff">
                <label>Website</label>
                <input defaultValue="www.techcorp.com" />
              </div>
              <div className="ff full">
                <label>Company Description</label>
                <textarea defaultValue="TechCorp is a leading software company building next-generation web applications used by millions worldwide. We believe in giving students real-world experience." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
