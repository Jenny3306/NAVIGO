const locations = [
  {
    id: "library",
    name: "Thư viện",
    type: "basic",
    qrCode: "QR_LIBRARY",
    image: "images/library.jpg",
  },

  { id: "a1", name: "Tòa A1", qrCode: "QR_A1", image: "images/a1.png" },
  { id: "a2", name: "Tòa A2", qrCode: "QR_A2", image: "images/a2.png" },
  { id: "a3", name: "Tòa A3", qrCode: "QR_A3", image: "images/a3.png" },
  { id: "a4", name: "Tòa A4", qrCode: "QR_A4", image: "images/a4.png" },
  { id: "a5", name: "Tòa A5", qrCode: "QR_A5", image: "images/a5.png" },

  { id: "b1", name: "Tòa B1", qrCode: "QR_B1", image: "images/b1.png" },
  { id: "b2", name: "Tòa B2", qrCode: "QR_B2", image: "images/b2.png" },
  { id: "b3", name: "Tòa B3", qrCode: "QR_B3", image: "images/b3.png" },
  { id: "b4", name: "Tòa B4", qrCode: "QR_B4", image: "images/b4.png" },
  { id: "b5", name: "Tòa B5", qrCode: "QR_B5", image: "images/b5.png" },
  { id: "b6", name: "Tòa B6", qrCode: "QR_B6", image: "images/b6.png" },
  { id: "b7", name: "Tòa B7", qrCode: "QR_B7", image: "images/b7.png" },
  { id: "b8", name: "Tòa B8", qrCode: "QR_B8", image: "images/b8.png" },
  { id: "b9", name: "Tòa B9", qrCode: "QR_B9", image: "images/b9.png" },
  { id: "b10", name: "Tòa B10", qrCode: "QR_B10", image: "images/b10.png" },

  { id: "c1", name: "Tòa C1", qrCode: "QR_C1", image: "images/c1.png" },
  { id: "c2", name: "Tòa C2", qrCode: "QR_C2", image: "images/c2.png" },
  { id: "c3", name: "Tòa C3", qrCode: "QR_C3", image: "images/c3.png" },
  { id: "c4", name: "Tòa C4", qrCode: "QR_C4", image: "images/c4.png" },
  { id: "c5", name: "Tòa C5", qrCode: "QR_C5", image: "images/c5.png" },
  { id: "c6", name: "Tòa C6", qrCode: "QR_C6", image: "images/c6.png" },

  {
    id: "gate1",
    name: "Cổng 1",
    qrCode: "QR_GATE1",
    image: "images/gate1.png",
  },
  {
    id: "gate2",
    name: "Cổng 2",
    qrCode: "QR_GATE2",
    image: "images/gate2.png",
  },
  {
    id: "gate3",
    name: "Cổng 3",
    qrCode: "QR_GATE3",
    image: "images/gate3.png",
  },

  {
    id: "hoabinh",
    name: "Giảng đường Hòa Bình",
    qrCode: "QR_HOABINH",
    image: "images/hoabinh.png",
  },
  {
    id: "canteen",
    name: "Bách Khoa food court",
    qrCode: "QR_CANTEEN",
    image: "images/canteen.png",
  },

  {
    id: "training",
    name: "Phòng đào tạo",
    qrCode: "QR_TRAINING",
    image: "images/training.png",
  },
  {
    id: "student-affairs",
    name: "Phòng Công tác sinh viên",
    qrCode: "QR_STUDENT_AFFAIRS",
    image: "images/student-affairs.png",
  },
  {
    id: "youth-union",
    name: "Phòng Đoàn thanh niên",
    qrCode: "QR_YOUTH_UNION",
    image: "images/youth-union.png",
  },
  {
    id: "international",
    name: "Phòng đào tạo Quốc Tế OISP",
    qrCode: "QR_INTERNATIONAL",
    image: "images/international.png",
  },

  {
    id: "dept1",
    name: "Văn phòng khoa Khoa học và Kĩ thuật máy tính",
    qrCode: "QR_DEPT1",
    image: "images/dept1.png",
  },
  {
    id: "dept2",
    name: "Văn phòng khoa Cơ khí",
    qrCode: "QR_DEPT2",
    image: "images/dept2.png",
  },
  {
    id: "dept3",
    name: "Văn phòng khoa Điện - Điện tử",
    qrCode: "QR_DEPT3",
    image: "images/dept3.png",
  },
  {
    id: "dept4",
    name: "Văn phòng khoa Kỹ thuật Giao thông",
    qrCode: "QR_DEPT4",
    image: "images/dept4.png",
  },
  {
    id: "dept5",
    name: "Văn phòng khoa Kỹ thuật Hóa học",
    qrCode: "QR_DEPT5",
    image: "images/dept5.png",
  },
  {
    id: "dept6",
    name: "Văn phòng khoa Môi trường và Tài nguyên",
    qrCode: "QR_DEPT6",
    image: "images/dept6.png",
  },
  {
    id: "dept7",
    name: "Văn phòng khoa Quản lý Công nghiệp",
    qrCode: "QR_DEPT7",
    image: "images/dept7.png",
  },
  {
    id: "dept8",
    name: "Văn phòng khoa Khoa học Ứng dụng",
    qrCode: "QR_DEPT8",
    image: "images/dept8.png",
  },
  {
    id: "dept9",
    name: "Văn phòng khoa Công nghệ Vật liệu",
    qrCode: "QR_DEPT9",
    image: "images/dept9.png",
  },
  {
    id: "dept10",
    name: "Văn phòng khoa Kỹ thuật Xây dựng",
    qrCode: "QR_DEPT10",
    image: "images/dept10.png",
  },
  {
    id: "dept11",
    name: "Kiosk Phòng đào tạo quốc tế OISP",
    qrCode: "QR_DEPT11",
    image: "images/dept11.png",
  },
  {
    id: "dept12",
    name: "📝 Phòng khoa 12",
    qrCode: "QR_DEPT12",
    image: "images/dept12.png",
  },
  {
    id: "dept13",
    name: "📝 Phòng khoa 13",
    qrCode: "QR_DEPT13",
    image: "images/dept13.png",
  },
  {
    id: "dept14",
    name: "📝 Phòng khoa 14",
    qrCode: "QR_DEPT14",
    image: "images/dept14.png",
  },
];

const TOTAL_LOCATIONS = 45;

let defaultBadges = [
  {
    id: 1,
    name: "Khám phá sơ cấp",
    required: 20,
    icon: "🥉",
    image: "khamphasocap.png",
  },
  {
    id: 2,
    name: "Nhà thám hiểm",
    required: 30,
    icon: "🥈",
    image: "nhathamhiem.png",
  },
  {
    id: 3,
    name: "Chinh phục viên",
    required: 40,
    icon: "🥇",
    image: "chinhphucvien.png",
  },
  {
    id: 4,
    name: "Bậc thầy bản đồ",
    required: 50,
    icon: "🏆",
    image: "bacthay.png",
  },
  {
    id: 5,
    name: "Huyền thoại",
    required: 100,
    icon: "👑",
    image: "huyenthoai.png",
  },
];

let defaultVouchers = [
  {
    id: 1,
    badge: "🥉",
    title: "Giảm 30k tại Trà Đé",
    value: "30K",
    desc: "Áp dụng cho hóa đơn từ 50k",
    required: 20,
  },
  {
    id: 2,
    badge: "🥈",
    title: "Giảm 50k tại Circle K",
    value: "50K",
    desc: "Áp dụng cho hóa đơn từ 100k",
    required: 30,
  },
  {
    id: 3,
    badge: "🥇",
    title: "Free 1 ly trà sữa",
    value: "FREE",
    desc: "Tại quán Ding Tea gần cổng 2",
    required: 40,
  },
  {
    id: 4,
    badge: "🏆",
    title: "Giảm 100k ăn uống",
    value: "100K",
    desc: "Áp dụng tại căn tin trường",
    required: 50,
  },
  {
    id: 5,
    badge: "👑",
    title: "Voucher VIP 200k",
    value: "200K",
    desc: "Sử dụng tại mọi quán ăn trong trường",
    required: 100,
  },
];

let currentUser = null;
let isGuest = false;
let isLoginMode = true;
let html5QrCode = null;
let isAdmin = false;
let pendingQRCode = null;
let selectedRating = 0;
let selectedImage = null;
let currentReviewFilter = "all";
let currentStarFilter = "all";

function getBadges() {
  return JSON.parse(localStorage.getItem("badges")) || defaultBadges;
}

function saveBadges(badges) {
  localStorage.setItem("badges", JSON.stringify(badges));
}

function getVouchers() {
  return JSON.parse(localStorage.getItem("vouchers")) || defaultVouchers;
}

function saveVouchers(vouchers) {
  localStorage.setItem("vouchers", JSON.stringify(vouchers));
}

function checkAuth() {
  const user = localStorage.getItem("currentUser");
  const guestMode = localStorage.getItem("guestMode");
  const adminMode = localStorage.getItem("isAdmin");

  if (guestMode === "true") {
    isGuest = true;
    currentUser = null;
    isAdmin = false;
    showMainApp();
  } else if (user) {
    currentUser = user;
    isGuest = false;
    isAdmin = adminMode === "true";
    showMainApp();
  } else {
    showLoginScreen();
  }
}

function showLoginScreen() {
  document.getElementById("loginScreen").style.display = "block";
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("qrScanBtn").style.display = "none";
}

function showMainApp() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";

  if (isGuest) {
    document.getElementById("currentUser").textContent = "Khách";
    document.getElementById("userBadgeDisplay").innerHTML =
      '<span class="guest-badge">Khách</span>';
    document.getElementById("logoutBtn").textContent = "Đăng nhập";
    document.getElementById("statsContainer").style.display = "none";
    document.getElementById("checkinTab").disabled = true;
    document.getElementById("voucherTab").disabled = true;
    document.getElementById("qrScanBtn").style.display = "none";
    document.getElementById("adminTab").style.display = "none";
  } else {
    document.getElementById("currentUser").textContent = currentUser;
    document.getElementById("logoutBtn").textContent = "Đăng xuất";
    document.getElementById("statsContainer").style.display = "block";
    document.getElementById("checkinTab").disabled = false;
    document.getElementById("voucherTab").disabled = false;
    document.getElementById("qrScanBtn").style.display = "block";

    // CHỈ HIỆN TAB ADMIN NÉU LÀ ADMIN
    if (isAdmin && currentUser === "navigo") {
      document.getElementById("adminTab").style.display = "block";
    } else {
      document.getElementById("adminTab").style.display = "none";
    }

    updateAllStats();
  }

  renderLocations();
  renderCheckinList();
  renderVouchers();
  renderReviews();

  // Check for pending QR code
  if (pendingQRCode && !isGuest && currentUser) {
    setTimeout(() => {
      handleQRCheckin(pendingQRCode);
      pendingQRCode = null;
    }, 500);
  }
}

function skipLogin() {
  isGuest = true;
  localStorage.setItem("guestMode", "true");
  showMainApp();
}

function toggleForm() {
  isLoginMode = !isLoginMode;
  const btn = document.getElementById("loginBtn");
  const toggleText = document.getElementById("toggleText");
  const link = document.querySelector(".form-toggle a");

  if (isLoginMode) {
    btn.textContent = "Đăng nhập";
    toggleText.textContent = "Chưa có tài khoản? ";
    link.textContent = "Đăng ký ngay";
  } else {
    btn.textContent = "Đăng ký";
    toggleText.textContent = "Đã có tài khoản? ";
    link.textContent = "Đăng nhập ngay";
  }
  document.getElementById("errorMessage").style.display = "none";
}

function showError(message) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showError("Vui lòng điền đầy đủ thông tin");
    return;
  }

  if (isLoginMode) {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (username === "navigo" && password === "10diembtl") {
      currentUser = username;
      isGuest = false;
      isAdmin = true;
      localStorage.setItem("currentUser", username);
      localStorage.setItem("isAdmin", "true");
      localStorage.removeItem("guestMode");
      showMainApp();
    } else if (users[username] && users[username] === password) {
      currentUser = username;
      isGuest = false;
      isAdmin = false;
      localStorage.setItem("currentUser", username);
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("guestMode");
      showMainApp();
    } else {
      showError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  } else {
    if (username.length < 3) {
      showError("Tên đăng nhập phải có ít nhất 3 ký tự");
      return;
    }
    if (password.length < 6) {
      showError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      showError("Tên đăng nhập đã tồn tại");
      return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    currentUser = username;
    isGuest = false;
    isAdmin = false;
    localStorage.setItem("currentUser", username);
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("guestMode");
    showMainApp();
  }

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

function logout() {
  if (isGuest) {
    localStorage.removeItem("guestMode");
    isGuest = false;
    checkAuth();
  } else {
    if (confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isAdmin");
      currentUser = null;
      isAdmin = false;
      checkAuth();
    }
  }
}

function getUserData() {
  if (isGuest || !currentUser)
    return {
      totalPoints: 0,
      currentCycle: 1,
      checkedItems: [],
      lastLocation: null,
    };
  const allData = JSON.parse(localStorage.getItem("userData")) || {};
  return (
    allData[currentUser] || {
      totalPoints: 0,
      currentCycle: 1,
      checkedItems: [],
      lastLocation: null,
    }
  );
}

function saveUserData(data) {
  if (isGuest || !currentUser) return;
  const allData = JSON.parse(localStorage.getItem("userData")) || {};
  allData[currentUser] = data;
  localStorage.setItem("userData", JSON.stringify(allData));
}

function handleQRCheckin(qrCode) {
  if (isGuest || !currentUser) {
    pendingQRCode = qrCode;
    alert("Vui lòng đăng nhập để check-in!");
    closeQRScanner();
    checkAuth();
    return;
  }

  const location = locations.find((loc) => loc.qrCode === qrCode);
  if (!location) {
    alert("Mã QR không hợp lệ!");
    closeQRScanner();
    return;
  }

  const userData = getUserData();

  if (userData.checkedItems.includes(location.id)) {
    closeQRScanner();
    setTimeout(() => {
      alert(
        `📍 Địa điểm này đã có trong danh sách check-in!\n\n${location.name}`,
      );
    }, 100);
    return;
  }

  const previousBadgeCount = getBadges().filter(
    (b) => userData.totalPoints >= b.required,
  ).length;

  userData.checkedItems.push(location.id);
  userData.totalPoints++;
  userData.lastLocation = location.id;

  if (userData.checkedItems.length === TOTAL_LOCATIONS) {
    userData.currentCycle++;
    userData.checkedItems = [];
  }

  saveUserData(userData);
  renderCheckinList();
  updateAllStats();

  const newBadgeCount = getBadges().filter(
    (b) => userData.totalPoints >= b.required,
  ).length;
  if (newBadgeCount > previousBadgeCount) {
    const newBadge = getBadges()
      .filter((b) => userData.totalPoints >= b.required)
      .pop();
    showBadgePopup(newBadge);
  }

  closeQRScanner();

  setTimeout(() => {
    alert(`🎉 Chúc mừng bạn đã đến ${location.name}!`);
  }, 100);
}

function openQRScanner() {
  if (isGuest) {
    alert("Vui lòng đăng nhập để sử dụng chức năng check-in!");
    return;
  }

  document.getElementById("qrScannerModal").classList.add("active");
  startQRScanner();
}

function closeQRScanner() {
  document.getElementById("qrScannerModal").classList.remove("active");
  stopQRScanner();
}

function startQRScanner() {
  html5QrCode = new Html5Qrcode("qrScanner");

  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 30,
        qrbox: { width: 300, height: 300 },
        aspectRatio: 1.0,
      },
      (decodedText) => {
        handleQRCheckin(decodedText);
      },
      () => {},
    )
    .catch(() => {
      alert("Không thể khởi động camera!");
    });
}

function stopQRScanner() {
  if (html5QrCode) {
    html5QrCode.stop().catch(() => {});
  }
}

function manualQRSubmit() {
  const qrCode = document.getElementById("manualQRInput").value.trim();
  if (qrCode) {
    handleQRCheckin(qrCode);
    document.getElementById("manualQRInput").value = "";
  }
}

function getCurrentBadge() {
  if (isGuest) return null;
  const userData = getUserData();
  const earned = getBadges().filter((b) => userData.totalPoints >= b.required);
  return earned.length > 0 ? earned[earned.length - 1] : null;
}

function getNextBadge() {
  if (isGuest) return null;
  const userData = getUserData();
  return getBadges().find((b) => userData.totalPoints < b.required);
}

function updateAllStats() {
  if (isGuest) return;

  const userData = getUserData();
  const currentBadge = getCurrentBadge();
  const nextBadge = getNextBadge();

  document.getElementById("totalPoints").textContent = userData.totalPoints;
  document.getElementById("currentCycle").textContent = userData.currentCycle;
  document.getElementById("cycleProgress").textContent =
    `${userData.checkedItems.length}/${TOTAL_LOCATIONS}`;

  if (currentBadge) {
    document.getElementById("currentBadgeIcon").textContent = currentBadge.icon;
    document.getElementById("currentBadgeName").textContent = currentBadge.name;
  } else {
    document.getElementById("currentBadgeIcon").textContent = "🏆";
    document.getElementById("currentBadgeName").textContent =
      "Chưa có huy hiệu";
  }

  if (nextBadge) {
    const remaining = nextBadge.required - userData.totalPoints;
    const progress =
      ((userData.totalPoints - (currentBadge ? currentBadge.required : 0)) /
        (nextBadge.required - (currentBadge ? currentBadge.required : 0))) *
      100;
    document.getElementById("progressBar").style.width = `${progress}%`;
    document.getElementById("progressBar").textContent =
      `${remaining} điểm nữa`;
    document.getElementById("progressLabel").textContent =
      `Còn ${remaining} điểm nữa để đạt huy hiệu "${nextBadge.name}"`;
  } else {
    document.getElementById("progressBar").style.width = "100%";
    document.getElementById("progressBar").textContent = "Hoàn thành!";
    document.getElementById("progressLabel").textContent =
      "🎉 Bạn đã đạt tất cả huy hiệu!";
  }

  updateUserBadge();
  renderVouchers();
}

function updateUserBadge() {
  if (isGuest) return;
  const badge = getCurrentBadge();
  const userData = getUserData();
  const display = document.getElementById("userBadgeDisplay");

  let html = "";
  if (isAdmin) {
    html += '<span class="admin-badge">👮 ADMIN</span>';
  }
  if (badge) {
    html += `<span class="user-badge">${badge.icon}</span>`;
  }
  html += `<span class="cycle-badge">Vòng ${userData.currentCycle}</span>`;

  display.innerHTML = html;
}

function showLocationPopup(location) {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

  image.onerror = null; // ❗️quan trọng
  image.src = location.image;

  overlay.classList.add("show");
  image.classList.add("show");
}


function showBadgePopup(location) {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

  // 🔥 DÒNG QUAN TRỌNG NHẤT
  image.src = location.image;

  image.onerror = function () {
    this.src =
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
      '<rect width="400" height="400" fill="%231e3c72"/>' +
      '<text x="200" y="220" font-size="32" text-anchor="middle" fill="white">' +
      location.name +
      "</text></svg>";
  };

  overlay.classList.add("show");
  image.classList.add("show");
}


function closeBadgePopup() {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

  overlay.classList.remove("show");
  image.classList.remove("show");
}

function renderLocations() {
  const container = document.getElementById("locationsList");
  if (!container) return;

  container.innerHTML = "";

  locations.forEach((loc) => {
    const div = document.createElement("div");
    div.className = "location-item";
    div.innerText = loc.name;

    div.onclick = () => showLocationPopup(loc);

    container.appendChild(div);
  });
}

// function openLocationPopup(locationId) {
//     const location = locations.find(l => l.id === locationId);
//     if (!location) return;

//     const modal = document.getElementById("locationModal");
//     const title = document.getElementById("popupTitle");
//     const img = document.getElementById("popupImage");

//     overlay.classList.add('show');
//     img.classList.add('show');

//     title.innerText = location.name;

//     // reset lỗi cũ
//     img.onerror = null;

//     // gán ảnh
//     img.src = `images/${location.id}.jpg`;

//     // nếu ảnh lỗi → fallback
//     img.onerror = () => {
//         img.src = "images/placeholder.jpg";
//     };

//     modal.style.display = "flex";
// }

function closeLocationPopup() {
  document.getElementById("imageOverlay").classList.remove("show");
  document.getElementById("locationImage").classList.remove("show");
}

function renderCheckinList() {
  const list = document.getElementById("checkinList");

  if (isGuest) {
    list.innerHTML =
      '<div style="text-align:center;padding:20px;color:#64748b;">Vui lòng đăng nhập để check-in!</div>';
    return;
  }

  const userData = getUserData();

  list.innerHTML = locations
    .map((loc) => {
      const isChecked = userData.checkedItems.includes(loc.id);
      return `
            <div class="checkin-item ${isChecked ? "completed" : ""}" ${isAdmin ? `onclick="adminToggleCheckin('${loc.id}')"` : ""} style="${isAdmin ? "cursor:pointer;" : ""}">
                <div class="checkbox ${isChecked ? "checked" : ""}">
                    ${isChecked ? "✓" : ""}
                </div>
                <span>${loc.name}</span>
                ${isAdmin ? '<span style="margin-left:auto;font-size:11px;color:#ef4444;">👮</span>' : ""}
            </div>
        `;
    })
    .join("");
}

function adminToggleCheckin(locationId) {
  if (!isAdmin) return;

  const userData = getUserData();

  if (userData.checkedItems.includes(locationId)) {
    userData.checkedItems = userData.checkedItems.filter(
      (id) => id !== locationId,
    );
    userData.totalPoints = Math.max(0, userData.totalPoints - 1);
  } else {
    userData.checkedItems.push(locationId);
    userData.totalPoints++;
  }

  saveUserData(userData);
  renderCheckinList();
  updateAllStats();
}

function renderVouchers() {
  if (isGuest) {
    document.getElementById("voucherList").innerHTML =
      '<div style="text-align:center;padding:20px;color:#64748b;">Đăng nhập để nhận voucher!</div>';
    return;
  }

  const userData = getUserData();
  const vouchers = getVouchers();
  const list = document.getElementById("voucherList");

  list.innerHTML = vouchers
    .map((v) => {
      const unlocked = userData.totalPoints >= v.required;
      return `
            <div class="voucher-card ${unlocked ? "" : "voucher-locked"}">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="font-size:40px;">${v.badge}</div>
                    <div style="font-size:28px;font-weight:bold;">${v.value}</div>
                </div>
                <div style="font-size:16px;font-weight:600;margin-bottom:5px;">${v.title}</div>
                <div style="font-size:13px;opacity:0.9;margin-bottom:10px;">${v.desc}</div>
                <div style="background:rgba(0,0,0,0.2);padding:8px 12px;border-radius:8px;font-size:12px;display:inline-block;">
                    ${unlocked ? "✅ Đã mở khóa!" : `🔒 Cần ${v.required} điểm`}
                </div>
            </div>
        `;
    })
    .join("");
}

function switchTab(tab) {
  if (isGuest && (tab === "checkin" || tab === "voucher" || tab === "admin")) {
    alert("Vui lòng đăng nhập!");
    return;
  }

  // CHỈ CHO PHÉP ADMIN VÀO TAB ADMIN
  if (tab === "admin" && (!isAdmin || currentUser !== "navigo")) {
    alert("Bạn không có quyền truy cập!");
    return;
  }

  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));

  event.target.classList.add("active");
  document.getElementById(`${tab}-content`).classList.add("active");

  // Show/hide create review button
  if (tab === "review") {
    document.getElementById("createReviewBtn").style.display = "block";
  } else {
    document.getElementById("createReviewBtn").style.display = "none";
  }
}

// Review System Functions
function getReviews() {
  return JSON.parse(localStorage.getItem("reviews")) || [];
}

function saveReviews(reviews) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function openReviewForm() {
  document.getElementById("reviewFormModal").classList.add("active");
}

function closeReviewForm() {
  document.getElementById("reviewFormModal").classList.remove("active");
  document.getElementById("reviewCategory").value = "";
  document.getElementById("reviewLocationName").value = "";
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  selectedImage = null;
  document.querySelectorAll("#ratingInput span").forEach((s) => {
    s.style.color = "#d1d5db";
  });
  document.getElementById("imagePreview").style.display = "none";
}

document.getElementById("ratingInput").addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    selectedRating = parseInt(e.target.dataset.rating);
    document.querySelectorAll("#ratingInput span").forEach((star, index) => {
      if (index < selectedRating) {
        star.style.color = "#fbbf24";
      } else {
        star.style.color = "#d1d5db";
      }
    });
  }
});

document
  .getElementById("reviewImageInput")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        selectedImage = event.target.result;
        const preview = document.getElementById("imagePreview");
        preview.src = selectedImage;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

function generateAnonymousName() {
  const adjectives = [
    "dũng cảm",
    "thông minh",
    "vui vẻ",
    "năng động",
    "sáng tạo",
    "nhiệt tình",
    "thân thiện",
  ];
  const animals = ["Gấu", "Mèo", "Chó", "Thỏ", "Cáo", "Hổ", "Sư tử"];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${animal} ${adj}`;
}

function submitReview() {
  const category = document.getElementById("reviewCategory").value;
  const locationName = document
    .getElementById("reviewLocationName")
    .value.trim();
  const text = document.getElementById("reviewText").value.trim();

  if (!category || !locationName || !text || selectedRating === 0) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const reviews = getReviews();
  const newReview = {
    id: Date.now(),
    category: category,
    locationName: locationName,
    rating: selectedRating,
    text: text,
    image: selectedImage || null,
    author: generateAnonymousName(),
    timestamp: new Date().toISOString(),
    avatar: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  };

  reviews.unshift(newReview);
  saveReviews(reviews);
  renderReviews();
  closeReviewForm();
  alert("✅ Đánh giá của bạn đã được đăng!");
}

function filterByStar(star) {
  currentStarFilter = star;
  document.querySelectorAll(".star-filter-btn").forEach((btn) => {
    btn.style.background = "white";
    btn.style.color = "#64748b";
    btn.style.borderColor = "#e2e8f0";
  });
  event.target.style.background = "#fbbf24";
  event.target.style.color = "white";
  event.target.style.borderColor = "#fbbf24";
  renderReviews();
}

function filterReviews(category) {
  currentReviewFilter = category;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.style.background = "white";
    btn.style.color = "#64748b";
    btn.style.borderColor = "#e2e8f0";
  });
  event.target.style.background = "#1e3c72";
  event.target.style.color = "white";
  event.target.style.borderColor = "#1e3c72";
  renderReviews();
}

function deleteReview(reviewId) {
  if (!isAdmin || currentUser !== "navigo") {
    alert("Bạn không có quyền xóa bài đăng!");
    return;
  }

  if (confirm("Bạn có chắc muốn xóa bài đánh giá này?")) {
    let reviews = getReviews();
    reviews = reviews.filter((r) => r.id !== reviewId);
    saveReviews(reviews);
    renderReviews();
    alert("✅ Đã xóa bài đánh giá!");
  }
}

function renderReviews() {
  let reviews = getReviews();

  if (currentReviewFilter !== "all") {
    reviews = reviews.filter((r) => r.category === currentReviewFilter);
  }

  if (currentStarFilter !== "all") {
    reviews = reviews.filter((r) => r.rating === currentStarFilter);
  }

  const list = document.getElementById("reviewList");

  if (reviews.length === 0) {
    list.innerHTML =
      '<div style="text-align:center;padding:20px;color:#64748b;font-size:14px;background:#f8fafc;border-radius:10px;">Chưa có đánh giá nào. Hãy là người đầu tiên! ✍️</div>';
    return;
  }

  list.innerHTML = reviews
    .map((review) => {
      const timeAgo = getTimeAgo(new Date(review.timestamp));
      const categoryIcon =
        review.category === "food"
          ? "🍽️"
          : review.category === "wc"
            ? "🚻"
            : "📌";

      return `
            <div style="background:white;border-radius:12px;padding:15px;margin-bottom:15px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:16px;">${review.avatar}</div>
                        <div>
                            <div style="font-weight:600;color:#1e3c72;font-size:14px;">${review.author}</div>
                            <div style="font-size:12px;color:#64748b;">${timeAgo}</div>
                        </div>
                    </div>
                    ${isAdmin && currentUser === "navigo" ? `<button onclick="deleteReview(${review.id})" style="background:#ef4444;color:white;border:none;padding:5px 12px;border-radius:8px;font-size:12px;cursor:pointer;">🗑️ Xóa</button>` : ""}
                </div>
                <div style="display:inline-block;background:#e0f2fe;color:#1e3c72;padding:4px 10px;border-radius:15px;font-size:12px;margin-bottom:10px;">${categoryIcon} ${review.locationName}</div>
                <div style="display:flex;gap:3px;margin-bottom:10px;">
                    ${Array(5)
                      .fill(0)
                      .map(
                        (_, i) =>
                          `<span style="color:${i < review.rating ? "#fbbf24" : "#d1d5db"};font-size:16px;">★</span>`,
                      )
                      .join("")}
                </div>
                <div style="margin:10px 0;font-size:14px;color:#1e293b;line-height:1.5;">${review.text}</div>
                ${review.image ? `<img src="${review.image}" style="width:100%;max-height:300px;object-fit:cover;border-radius:10px;margin-top:10px;">` : ""}
            </div>
        `;
    })
    .join("");
}

function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  if (seconds < 60) return "Vừa xong";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} phút trước`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} giờ trước`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} ngày trước`;
  return date.toLocaleDateString("vi-VN");
}

function adminResetCheckin() {
  if (!isAdmin) return;
  if (confirm("Reset tiến độ check-in vòng hiện tại?")) {
    const userData = getUserData();
    userData.checkedItems = [];
    saveUserData(userData);
    renderCheckinList();
    updateAllStats();
    alert("✅ Đã reset!");
  }
}

function adminResetAll() {
  if (!isAdmin) return;
  if (confirm("Reset toàn bộ dữ liệu? (Không thể khôi phục)")) {
    const userData = getUserData();
    userData.totalPoints = 0;
    userData.currentCycle = 1;
    userData.checkedItems = [];
    saveUserData(userData);
    renderCheckinList();
    updateAllStats();
    alert("✅ Đã reset toàn bộ!");
  }
}

function adminAddVoucher() {
  if (!isAdmin) return;
  const title = document.getElementById("voucherTitle").value.trim();
  const value = document.getElementById("voucherValue").value.trim();
  const desc = document.getElementById("voucherDesc").value.trim();
  const required = parseInt(document.getElementById("voucherRequired").value);
  const badge = document.getElementById("voucherBadge").value.trim();

  if (!title || !value || !desc || !required || !badge) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const vouchers = getVouchers();
  vouchers.push({
    id: Date.now(),
    badge: badge,
    title: title,
    value: value,
    desc: desc,
    required: required,
  });
  saveVouchers(vouchers);
  renderVouchers();

  document.getElementById("voucherTitle").value = "";
  document.getElementById("voucherValue").value = "";
  document.getElementById("voucherDesc").value = "";
  document.getElementById("voucherRequired").value = "";
  document.getElementById("voucherBadge").value = "";

  alert("✅ Đã thêm voucher!");
}

function adminAddBadge() {
  if (!isAdmin) return;
  const name = document.getElementById("badgeName").value.trim();
  const required = parseInt(document.getElementById("badgeRequired").value);
  const icon = document.getElementById("badgeIcon").value.trim();
  const image = document.getElementById("badgeImage").value.trim();

  if (!name || !required || !icon || !image) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const badges = getBadges();
  badges.push({
    id: Date.now(),
    name: name,
    required: required,
    icon: icon,
    image: image,
  });
  badges.sort((a, b) => a.required - b.required);
  saveBadges(badges);
  updateAllStats();

  document.getElementById("badgeName").value = "";
  document.getElementById("badgeRequired").value = "";
  document.getElementById("badgeIcon").value = "";
  document.getElementById("badgeImage").value = "";

  alert("✅ Đã thêm huy hiệu!");
}

// Initialize

const urlParams = new URLSearchParams(window.location.search);
const qrCode = urlParams.get("qr");
if (qrCode) {
  pendingQRCode = qrCode;
  if (!isGuest && currentUser) {
    setTimeout(() => {
      handleQRCheckin(qrCode);
      pendingQRCode = null;
    }, 1000);
  }
}

document
  .getElementById("badgePopupOverlay")
  .addEventListener("click", closeBadgePopup);
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
});

const locationImages = {
  library: "images/library.jpg",

  a1: "images/a1.png",
  a2: "images/a2.png",
  a3: "images/a3.png",
  a4: "images/a4.png",
  a5: "images/a5.png",

  b1: "images/b1.png",
  b2: "images/b2.png",
  b3: "images/b3.png",
  b4: "images/b4.png",
  b5: "images/b5.png",
  b6: "images/b6.png",
  b7: "images/b7.png",
  b8: "images/b8.png",
  b9: "images/b9.png",
  b10: "images/b10.png",

  c1: "images/c1.png",
  c2: "images/c2.png",
  c3: "images/c3.png",
  c4: "images/c4.png",
  c5: "images/c5.png",
  c6: "images/c6.png",

  gate1: "images/gate1.png",
  gate2: "images/gate2.png",
  gate3: "images/gate3.png",

  hoabinh: "images/hoabinh.png",
  canteen: "images/canteen.png",

  training: "images/training.png",
  "student-affairs": "images/student-affairs.png",
  "youth-union": "images/youth-union.png",
  international: "images/international.png",

  dept1: "images/dept1.png",
  dept2: "images/dept2.png",
  dept3: "images/dept3.png",
  dept4: "images/dept4.png",
  dept5: "images/dept5.png",
  dept6: "images/dept6.png",
  dept7: "images/dept7.png",
  dept8: "images/dept8.png",
  dept9: "images/dept9.png",
  dept10: "images/dept10.png",
  dept11: "images/dept11.png",
  dept12: "images/dept12.png",
  dept13: "images/dept13.png",
  dept14: "images/dept14.png",
};

function showLocationImage(locationId) {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

  image.src = `images/${locationId}.jpg`; // or .png

  // to pop up pictures
  overlay.classList.add("show");
  image.classList.add("show");
}

function openBadgePopup(imageSrc) {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

  image.src = imageSrc;

  overlay.classList.add("show");
  image.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
  renderLocations();
});
