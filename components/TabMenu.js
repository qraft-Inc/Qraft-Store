import Artist from "./Artist";
import Designers from "./Designers";
import Gallerist from "./Gallerist";

export default function TabMenu() {
  return (
    <>

      <ul className="nav nav-tabs flex md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-center" id="tabs-tab3" role="tablist">
        <li className="nav-item" role="presentation">
          <a href="#artist" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#artist" role="tab" aria-controls="artist" aria-selected="true">Live Musicians</a>
        </li>
        {/* <li className="nav-item" role="presentation">
          <a href="#designers" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
      hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#designers" role="tab" aria-controls="designers" aria-selected="false">Designers</a>
        </li> */}
        <li className="nav-item" role="presentation">
          <a href="#gallerist" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
      focus:border-transparent" id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#gallerist" role="tab" aria-controls="gallerist" aria-selected="false">Live Visual Artists</a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContent3">
        <div className="tab-pane fade show active" id="artist" role="tabpanel" aria-labelledby="tabs-home-tab3">
          <Artist />
        </div>
        <div className="tab-pane fade" id="designers" role="tabpanel" aria-labelledby="tabs-profile-tab3">
          <Designers/>
        </div>
        <div className="tab-pane fade" id="gallerist" role="tabpanel" aria-labelledby="tabs-profile-tab3">
          <Gallerist/>
        </div>
      </div>
      <div />




    </>
  )
}