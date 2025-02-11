import styles from "./Sidebar.module.css"

export const SideBar = () => {
  return (
    <aside className={styles.aside}>
        <label htmlFor="sidebar-active" className={styles.openSidebarButton}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="250px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>
        <input type="checkbox" name="checkbox" id="sidebar-active" className={styles.sidebarActive}/>

      <nav className={styles.sidebarNav}>

        <label htmlFor="sidebar-active" className={styles.closeSidebarButton}>
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="250px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </label>

        {/* <ul className={styles.sidebarNavList}> */}

          <p className={styles.sidebarNavItem}>

            <label htmlFor="nested-sidebar-nav">
              <span>home</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </label>

            <input type="checkbox" name="nested-sidebar-nav" id="nested-sidebar-nav" className={styles.nestedSidebarNav} />

            <span className={styles.nestedSidebarNavlist}>item</span>
            <span className={styles.nestedSidebarNavlist}>item</span>
            <span className={styles.nestedSidebarNavlist}>item</span>
            <span className={styles.nestedSidebarNavlist}>item</span>
            <span className={styles.nestedSidebarNavlist}>item</span>

          </p>

          <p className={styles.sidebarNavItem}>

<label htmlFor="nested-sidebar-nav-legal">
  <span>legal</span>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>
</label>

<input type="checkbox" name="nested-sidebar-nav" id="nested-sidebar-nav-legal" className={styles.nestedSidebarNav} />

<span className={styles.nestedSidebarNavlist}>item</span>
<span className={styles.nestedSidebarNavlist}>item</span>
<span className={styles.nestedSidebarNavlist}>item</span>
<span className={styles.nestedSidebarNavlist}>item</span>
<span className={styles.nestedSidebarNavlist}>item</span>

</p>

        {/* </ul> */}

        </nav>

    </aside>
  )
}