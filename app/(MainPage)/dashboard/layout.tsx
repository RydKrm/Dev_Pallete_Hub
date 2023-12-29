import DashBoardNavbar from "./DashBoardNav";

export default function RootLayout({children}:{children: React.ReactNode}){
  return (
      <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col mt-3 drawer-content ms-5">
              <label htmlFor="my-drawer-2" className="w-40 text-xs btn btn-primary drawer-button lg:hidden">
                  Open Dashboard
              </label>
              {children}
          </div>
          <div className="mt-3 ml-2 rounded-sm shadow-md drawer-side bg-c_bg_light dark:bg-c_bg_dark Border">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <div className="h-full menu w-80 text-base-content ">
                <DashBoardNavbar />
              </div>
          </div>
      </div>
  )

}