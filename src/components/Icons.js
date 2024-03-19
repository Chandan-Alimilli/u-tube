function Icons() {
  return (
    <div className="col-span-1 flex ml-[25px]">
      <a href="/icons">
        <img
          className="h-10 pt-1 p-1 pl-8 cursor-pointer"
          alt="notifications"
          src="https://ongpng.com/wp-content/uploads/2023/10/bell-icon-with-one-notification-1.png"
        />
      </a>

      <a href="/icons">
        <img
          alt="user"
          className="h-10 p-1  pl-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </a>

      <a href="/icons">
        <img
          className="h-9  pl-8 cursor-pointer"
          alt="settings"
          src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
        />
      </a>
    </div>
  );
}

export default Icons;
