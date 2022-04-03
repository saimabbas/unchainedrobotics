import React from "react";
import FilterIcon from "../../../public/assets/icons/FilterIcon";
import SortIcon from "../../../public/assets/icons/SortIcon";
import st from "../../../styles/components/Pages/ShopPage/SortFilterBoxMOB.module.css";
import Link from "next/link";
const SortFilterBoxMOB = (props) => {
  return (
    <div className={st.sortFilterBox}>
      <main
        /* onClick={() => {
          setSortMob(true);
        }} */
        onClick={props.openSortModalMob}
      >
        <span>
          <SortIcon color="#313130" /> Sort by
        </span>{" "}
      </main>
      <main>
        <Link href={"/FiltersMob"}>
          <span>
            {/* <div className="ds-indicator"></div> */}
            <FilterIcon color="#313130" /> Filter
          </span>
        </Link>
      </main>
    </div>
  );
};

export default SortFilterBoxMOB;
