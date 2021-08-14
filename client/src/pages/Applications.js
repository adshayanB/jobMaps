import React, { useEffect, useState } from "react";
import Homenav from "../components/Homenav";
import Filters from "../components/Filters";
import Jobapps from "../components/Jobapps";

function Applications() {
  const [jobApps, setJobApps] = useState([]);
  const [query, setQuery] = useState(`/applications/getAll`);
  const [isDeleteRequested, setIsDeleteRequested] = useState(false);
  const [appToDelete, setAppToDelete] = useState("");
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    loadJobApps();
  }, [query, rerender]);

  const loadJobApps = async () => {
    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    console.log(auth);
    try {
      const response = await fetch(query, {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      });
      const data = await response.json();
      setJobApps(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJobAppsHanlder = async () => {
    try {
      let token = localStorage.getItem("token");
      let auth = "JWT " + token;
      console.log("app to delete", appToDelete);

      const response = await fetch("/applications", {
        method: "DELETE",
        headers: {
          Authorization: auth,
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          appId: appToDelete,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        console.log("deleted");
        setAppToDelete("");
        setRerender(!rerender);
        setIsDeleteRequested(false);
      } else {
        console.log("not deleted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`${isDeleteRequested ? "deleteOverlay" : "hide"}`}>
        <div className="deletePopup">
          Are you sure you want to delete your Job App?
          <div className="buttons">
            <div className="button" onClick={deleteJobAppsHanlder}>
              Yes
            </div>
            <div
              className="button"
              onClick={() => {
                setIsDeleteRequested(false);
              }}
            >
              No
            </div>
          </div>
        </div>
      </div>
      <Homenav />
      <div className="homeStyles">
        <Filters
          jobApps={jobApps}
          setJobApps={setJobApps}
          setQuery={setQuery}
          query={query}
        />
        <Jobapps
          jobApps={jobApps}
          isDeleteRequested={isDeleteRequested}
          setIsDeleteRequested={setIsDeleteRequested}
          appToDelete={appToDelete}
          setAppToDelete={setAppToDelete}
          setRerender={setRerender}
          rerender={rerender}
        />
      </div>
    </>
  );
}

export default Applications;
