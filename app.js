const locations = [
  {
    id: "library",
    name: "Thư viện",
    type: "basic",
    qrCode: "QR_LIBRARY",
    image: "images/library.png",
  },
  { id: "a1", name: "Tòa A1", qrCode: "QR_A1", image: "images/toa/a1.png" },
  { id: "a2", name: "Tòa A2", qrCode: "QR_A2", image: "images/toa/a2.png" },
  { id: "a3", name: "Tòa A3", qrCode: "QR_A3", image: "images/toa/a3.png" },
  { id: "a4", name: "Tòa A4", qrCode: "QR_A4", image: "images/toa/a4.png" },
  { id: "a5", name: "Tòa A5", qrCode: "QR_A5", image: "images/toa/a5.png" },
  { id: "b1", name: "Tòa B1", qrCode: "QR_B1", image: "images/toa/b1.png" },
  { id: "b2", name: "Tòa B2", qrCode: "QR_B2", image: "images/toa/b2.png" },
  { id: "b3", name: "Tòa B3", qrCode: "QR_B3", image: "images/toa/b3.png" },
  { id: "b4", name: "Tòa B4", qrCode: "QR_B4", image: "images/toa/b4.png" },
  { id: "b6", name: "Tòa B6", qrCode: "QR_B6", image: "images/toa/b6.png" },
  { id: "b8", name: "Tòa B8", qrCode: "QR_B8", image: "images/toa/b8.png" },
  { id: "b9", name: "Tòa B9", qrCode: "QR_B9", image: "images/toa/b9.png" },
  { id: "b10", name: "Tòa B10", qrCode: "QR_B10", image: "images/toa/b10.png" },
  { id: "b11", name: "Tòa B11", qrCode: "QR_B11", image: "images/toa/b11.png" },
  { id: "c1", name: "Tòa C1", qrCode: "QR_C1", image: "images/toa/c1.png" },
  { id: "c2", name: "Tòa C2", qrCode: "QR_C2", image: "images/toa/c2.png" },
  { id: "c3", name: "Tòa C3", qrCode: "QR_C3", image: "images/toa/c3.png" },
  { id: "c4", name: "Tòa C4", qrCode: "QR_C4", image: "images/toa/c4.png" },
  { id: "c5", name: "Tòa C5", qrCode: "QR_C5", image: "images/toa/c5.png" },
  { id: "c6", name: "Tòa C6", qrCode: "QR_C6", image: "images/toa/c6.png" },
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
    name: "Giảng đường Hòa Bình (sau tòa B6)",
    qrCode: "QR_HOABINH",
    image: "images/hoabinh.png",
  },
  { id: "hall", 
    name: "Hội trường A5", 
    qrCode: "QR_HALL", 
    image: "images/hall.png" 
  },
  {
    id: "canteen1",
    name: "Bách Khoa food court 1",
    qrCode: "QR_CANTEEN1",
    image: "images/canteen1.png",
  },
  {
    id: "canteen2",
    name: "Bách Khoa food court 2",
    qrCode: "QR_CANTEEN2",
    image: "images/canteen2.png",
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
    id: "international",
    name: "Phòng đào tạo Quốc Tế OISP (tầng 4 tòa A4)",
    qrCode: "QR_INTERNATIONAL",
    image: "images/international.png",
  },
  {
    id: "kiosk",
    name: "Kiosk Phòng đào tạo quốc tế OISP (đối diện tòa A1)",
    qrCode: "QR_KIOSK",
    image: "images/kiosk.png",
  },
  {
    id: "bao-duong",
    name: "Trung tâm Đào tạo Bảo dưỡng Công nghiệp",
    qrCode: "QR_BAO_DUONG",
    image: "images/bao-duong.png",
  },
  {
    id: "dept1",
    name: "Văn phòng khoa Khoa học và Kĩ thuật máy tính",
    qrCode: "QR_DEPT1",
    image: "images/khoa/dept1.png",
  },
  {
    id: "dept2",
    name: "Văn phòng khoa Cơ khí",
    qrCode: "QR_DEPT2",
    image: "images/khoa/dept2.png",
  },
  {
    id: "dept3",
    name: "Văn phòng khoa Điện - Điện tử",
    qrCode: "QR_DEPT3",
    image: "images/khoa/dept3.png",
  },
  {
    id: "dept4",
    name: "Văn phòng khoa Kỹ thuật Giao thông",
    qrCode: "QR_DEPT4",
    image: "images/khoa/dept4.png",
  },
  {
    id: "dept5",
    name: "Văn phòng khoa Kỹ thuật Hóa học",
    qrCode: "QR_DEPT5",
    image: "images/khoa/dept5.png",
  },
  {
    id: "dept6",
    name: "Văn phòng khoa Môi trường và Tài nguyên",
    qrCode: "QR_DEPT6",
    image: "images/khoa/dept6.png",
  },
  {
    id: "dept7",
    name: "Văn phòng khoa Quản lý Công nghiệp",
    qrCode: "QR_DEPT7",
    image: "images/khoa/dept7.png",
  },
  {
    id: "dept8",
    name: "Văn phòng khoa Khoa học Ứng dụng",
    qrCode: "QR_DEPT8",
    image: "images/khoa/dept8.png",
  },
  {
    id: "dept9",
    name: "Văn phòng khoa Công nghệ Vật liệu",
    qrCode: "QR_DEPT9",
    image: "images/khoa/dept9.png",
  },
  {
    id: "dept10",
    name: "Văn phòng khoa Kỹ thuật Xây dựng",
    qrCode: "QR_DEPT10",
    image: "images/khoa/dept10.png",
  },
  {
    id: "dept11",
    name: "Văn phòng khoa Kĩ thuật Địa chất và Dầu khí",
    qrCode: "QR_DEPT11",
    image: "images/khoa/dept11.png",
  },
];

const TOTAL_LOCATIONS = 45;
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzR-fc4H0xo62Qnu4KEJajpwsayQxdQ512T7jt4AM8jncq7tuoYrUUAj7cztH6K8WGt/exec";

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
let currentReviewId = null;

// ============ NOTIFICATION SYSTEM ============
function getNotifications() {
  return JSON.parse(localStorage.getItem("notifications")) || [];
}

function saveNotifications(notifications) {
  localStorage.setItem("notifications", JSON.stringify(notifications));
}

function addNotification(type, message, data = {}) {
  const notifications = getNotifications();
  notifications.unshift({
    id: Date.now(),
    type: type, // 'reaction', 'comment', 'report', 'voucher'
    message: message,
    data: data,
    timestamp: new Date().toISOString(),
    read: false
  });
  saveNotifications(notifications);
  updateNotificationBadge();
}

function markNotificationRead(notificationId) {
  const notifications = getNotifications();
  const notification = notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    saveNotifications(notifications);
    updateNotificationBadge();
  }
}

function updateNotificationBadge() {
  const notifications = getNotifications();
  const unreadCount = notifications.filter(n => !n.read && 
    (isAdmin ? true : n.data.targetUser === currentUser)
  ).length;
  
  const badge = document.getElementById("notificationBadge");
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount > 99 ? "99+" : unreadCount;
      badge.style.display = "block";
    } else {
      badge.style.display = "none";
    }
  }
}

function toggleNotifications() {
  const panel = document.getElementById("notificationPanel");
  panel.classList.toggle("active");
  renderNotifications();
}

function renderNotifications() {
  const list = document.getElementById("notificationList");
  let notifications = getNotifications();
  
  // Filter notifications for current user
  if (isAdmin) {
    // Admin sees all notifications
    notifications = notifications.filter(n => 
      n.type === 'report' || n.type === 'voucher'
    );
  } else {
    // Regular users see only their notifications
    notifications = notifications.filter(n => 
      n.data.targetUser === currentUser
    );
  }
  
  if (notifications.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:20px;color:#64748b;">Không có thông báo</div>';
    return;
  }
  
  list.innerHTML = notifications.map(n => {
    const timeAgo = getTimeAgo(new Date(n.timestamp));
    const icon = n.type === 'reaction' ? '❤️' : 
                 n.type === 'comment' ? '💬' : 
                 n.type === 'report' ? '⚠️' : '🎁';
    
    return `
      <div class="notification-item ${n.read ? 'read' : ''}" onclick="handleNotificationClick(${n.id})">
        <div style="font-size:24px;margin-right:10px;">${icon}</div>
        <div style="flex:1;">
          <div style="font-size:14px;color:#1e3c72;font-weight:500;">${n.message}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px;">${timeAgo}</div>
        </div>
        ${!n.read ? '<div style="width:8px;height:8px;background:#10b981;border-radius:50%;"></div>' : ''}
      </div>
    `;
  }).join('');
}

function handleNotificationClick(notificationId) {
  markNotificationRead(notificationId);
  const notifications = getNotifications();
  const notification = notifications.find(n => n.id === notificationId);
  
  if (notification) {
    if (notification.type === 'report') {
      // Navigate to admin reports
      switchTab('admin');
      setTimeout(() => {
        document.getElementById('adminReports').scrollIntoView({behavior: 'smooth'});
      }, 300);
    } else if (notification.type === 'voucher') {
      // Navigate to admin voucher management
      switchTab('admin');
    } else if (notification.data.reviewId) {
      // Navigate to the review
      switchTab('review');
      setTimeout(() => {
        const reviewEl = document.querySelector(`[data-review-id="${notification.data.reviewId}"]`);
        if (reviewEl) {
          reviewEl.scrollIntoView({behavior: 'smooth'});
        }
      }, 300);
    }
  }
  
  toggleNotifications();
}

// ============ REPORTS SYSTEM ============
function getReports() {
  return JSON.parse(localStorage.getItem("reports")) || [];
}

function saveReports(reports) {
  localStorage.setItem("reports", JSON.stringify(reports));
}

function reportContent(contentId, contentType, reason) {
  const reports = getReports();
  reports.push({
    id: Date.now(),
    contentId: contentId,
    contentType: contentType, // 'review' or 'comment'
    reason: reason,
    reporter: generateAnonymousName(),
    timestamp: new Date().toISOString(),
    status: 'pending'
  });
  saveReports(reports);
  
  // Notify admin
  addNotification('report', `Báo cáo mới: ${contentType === 'review' ? 'Bài đăng' : 'Bình luận'} - ${reason}`, {
    reportId: reports[reports.length - 1].id
  });
  
  alert("✅ Đã gửi báo cáo! Admin sẽ xem xét.");
}

function openReportModal(contentId, contentType) {
  currentReviewId = contentId;
  document.getElementById('reportContentType').value = contentType;
  document.getElementById('reportModal').classList.add('active');
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('active');
  document.getElementById('reportReason').value = '';
}

function submitReport() {
  const reason = document.getElementById('reportReason').value.trim();
  const contentType = document.getElementById('reportContentType').value;
  
  if (!reason) {
    alert("Vui lòng nhập lý do báo cáo!");
    return;
  }
  
  reportContent(currentReviewId, contentType, reason);
  closeReportModal();
}

function renderAdminReports() {
  if (!isAdmin) return;
  
  const reports = getReports().filter(r => r.status === 'pending');
  const container = document.getElementById('adminReportsList');
  
  if (reports.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:#64748b;">Không có báo cáo nào</div>';
    return;
  }
  
  container.innerHTML = reports.map(report => {
    const timeAgo = getTimeAgo(new Date(report.timestamp));
    return `
      <div style="background:white;border-radius:10px;padding:15px;margin-bottom:10px;border-left:4px solid #ef4444;">
        <div style="display:flex;justify-content:between;align-items:start;margin-bottom:10px;">
          <div style="flex:1;">
            <div style="font-weight:600;color:#ef4444;margin-bottom:5px;">
              ${report.contentType === 'review' ? '📝 Bài đăng' : '💬 Bình luận'}
            </div>
            <div style="font-size:14px;color:#1e3c72;margin-bottom:5px;"><strong>Lý do:</strong> ${report.reason}</div>
            <div style="font-size:12px;color:#64748b;">Báo cáo bởi ${report.reporter} · ${timeAgo}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button onclick="resolveReport(${report.id}, ${report.contentId}, '${report.contentType}')" 
                  style="flex:1;padding:8px;background:#ef4444;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
            🗑️ Xóa nội dung
          </button>
          <button onclick="dismissReport(${report.id})" 
                  style="flex:1;padding:8px;background:#64748b;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
            ❌ Bỏ qua
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function resolveReport(reportId, contentId, contentType) {
  if (!confirm("Xóa nội dung này?")) return;
  
  // Delete the content
  if (contentType === 'review') {
    deleteReview(contentId);
  } else {
    deleteComment(contentId);
  }
  
  // Mark report as resolved
  const reports = getReports();
  const report = reports.find(r => r.id === reportId);
  if (report) {
    report.status = 'resolved';
    saveReports(reports);
  }
  
  renderAdminReports();
  alert("✅ Đã xóa nội dung!");
}

function dismissReport(reportId) {
  const reports = getReports();
  const report = reports.find(r => r.id === reportId);
  if (report) {
    report.status = 'dismissed';
    saveReports(reports);
  }
  renderAdminReports();
}

// ============ COMMENTS & REACTIONS ============
function getComments() {
  return JSON.parse(localStorage.getItem("comments")) || [];
}

function saveComments(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function getReactions() {
  return JSON.parse(localStorage.getItem("reactions")) || [];
}

function saveReactions(reactions) {
  localStorage.setItem("reactions", JSON.stringify(reactions));
}

function toggleReaction(reviewId, reactionType) {
  let reactions = getReactions();
  const userSessionId = getUserSessionId();
  const existingReaction = reactions.find(r => 
    r.reviewId === reviewId && r.userId === userSessionId && r.type === reactionType
  );
  
  if (existingReaction) {
    // Remove reaction
    reactions = reactions.filter(r => r.id !== existingReaction.id);
  } else {
    // Add reaction
    const newReaction = {
      id: Date.now(),
      reviewId: reviewId,
      userId: userSessionId,
      type: reactionType,
      timestamp: new Date().toISOString()
    };
    reactions.push(newReaction);
    
    // Notify review author
    const review = getReviews().find(r => r.id === reviewId);
    if (review && review.authorId) {
      addNotification('reaction', 
        `Ai đó đã thả cảm xúc ${reactionType} vào bài đăng của bạn`, 
        { reviewId: reviewId, targetUser: review.authorId }
      );
    }
  }
  
  saveReactions(reactions);
  renderReviews();
}

function getUserSessionId() {
  let sessionId = localStorage.getItem('userSessionId');
  if (!sessionId) {
    sessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userSessionId', sessionId);
  }
  return sessionId;
}

function addComment(reviewId, commentText, commentImage = null) {
  if (!commentText.trim() && !commentImage) return;
  
  const comments = getComments();
  const newComment = {
    id: Date.now(),
    reviewId: reviewId,
    text: commentText.trim(),
    image: commentImage,
    author: generateAnonymousName(),
    userId: getUserSessionId(),
    timestamp: new Date().toISOString()
  };
  
  comments.push(newComment);
  saveComments(comments);
  
  // Notify review author
  const review = getReviews().find(r => r.id === reviewId);
  if (review && review.authorId) {
    addNotification('comment', 
      `Ai đó đã bình luận: "${commentText.substring(0, 30)}${commentText.length > 30 ? '...' : ''}"`, 
      { reviewId: reviewId, targetUser: review.authorId }
    );
  }
  
  renderReviews();
}

function deleteComment(commentId) {
  if (!isAdmin) return;
  
  let comments = getComments();
  comments = comments.filter(c => c.id !== commentId);
  saveComments(comments);
  renderReviews();
}

function openCommentInput(reviewId) {
  const existing = document.getElementById(`commentInput-${reviewId}`);
  if (existing) {
    existing.remove();
    return;
  }
  
  const reviewEl = document.querySelector(`[data-review-id="${reviewId}"]`);
  const commentSection = reviewEl.querySelector('.comment-section');
  
  const inputHtml = `
    <div id="commentInput-${reviewId}" style="margin-top:10px;padding:10px;background:#f8fafc;border-radius:10px;">
      <textarea id="commentText-${reviewId}" placeholder="Viết bình luận..." 
                style="width:100%;padding:8px;border:2px solid #e2e8f0;border-radius:8px;font-size:13px;min-height:60px;resize:vertical;"></textarea>
      <div style="display:flex;gap:8px;margin-top:8px;align-items:center;">
        <input type="file" id="commentImage-${reviewId}" accept="image/*" style="display:none;">
        <label for="commentImage-${reviewId}" 
               style="padding:6px 12px;background:#e0f2fe;color:#1e3c72;border-radius:8px;cursor:pointer;font-size:12px;">
          📷 Thêm ảnh
        </label>
        <img id="commentImagePreview-${reviewId}" style="max-width:80px;max-height:80px;border-radius:6px;display:none;">
        <button onclick="submitComment(${reviewId})" 
                style="margin-left:auto;padding:6px 16px;background:#10b981;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
          Gửi
        </button>
      </div>
    </div>
  `;
  
  commentSection.insertAdjacentHTML('beforeend', inputHtml);
  
  // Handle image preview
  document.getElementById(`commentImage-${reviewId}`).addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const preview = document.getElementById(`commentImagePreview-${reviewId}`);
        preview.src = event.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
}

function submitComment(reviewId) {
  const text = document.getElementById(`commentText-${reviewId}`).value;
  const imageInput = document.getElementById(`commentImage-${reviewId}`);
  const imagePreview = document.getElementById(`commentImagePreview-${reviewId}`);
  
  const image = imagePreview.src && imagePreview.style.display === 'block' ? imagePreview.src : null;
  
  if (!text.trim() && !image) {
    alert("Vui lòng nhập nội dung hoặc thêm ảnh!");
    return;
  }
  
  addComment(reviewId, text, image);
  document.getElementById(`commentInput-${reviewId}`).remove();
}

// ============ GOOGLE SHEETS INTEGRATION ============
async function callAppsScript(action, data) {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: action,
        ...data
      })
    });
    
    // Note: With no-cors, we can't read the response
    // So we'll use a workaround with redirects
    return { success: true };
  } catch (error) {
    console.error('Error calling Apps Script:', error);
    return { success: false, message: 'Lỗi kết nối' };
  }
}

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
    document.getElementById("notificationBtn").style.display = "none";
  } else {
    document.getElementById("currentUser").textContent = currentUser;
    document.getElementById("logoutBtn").textContent = "Đăng xuất";
    document.getElementById("statsContainer").style.display = "block";
    document.getElementById("checkinTab").disabled = false;
    document.getElementById("voucherTab").disabled = false;
    document.getElementById("qrScanBtn").style.display = "block";
    document.getElementById("notificationBtn").style.display = "block";

    if (isAdmin && currentUser === "navigo") {
      document.getElementById("adminTab").style.display = "block";
    } else {
      document.getElementById("adminTab").style.display = "none";
    }

    updateAllStats();
    updateNotificationBadge();
  }

  renderLocations();
  renderCheckinList();
  renderVouchers();
  renderReviews();

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

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showError("Vui lòng điền đầy đủ thông tin");
    return;
  }

  if (isLoginMode) {
    // Login - check with localStorage first, then with server
    if (username === "navigo" && password === "10diembtl") {
      currentUser = username;
      isGuest = false;
      isAdmin = true;
      localStorage.setItem("currentUser", username);
      localStorage.setItem("isAdmin", "true");
      localStorage.removeItem("guestMode");
      showMainApp();
    } else {
      // Try local storage first
      const users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[username] && users[username] === password) {
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
    }
  } else {
    // Register
    if (username.length < 3) {
      showError("Tên đăng nhập phải có ít nhất 3 ký tự");
      return;
    }
    if (password.length < 6) {
      showError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    
    if (username === "navigo") {
      showError("Tên đăng nhập không được phép");
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

  image.onerror = null;
  image.src = location.image;

  overlay.classList.add("show");
  image.classList.add("show");
}

function showBadgePopup(location) {
  const overlay = document.getElementById("badgePopupOverlay");
  const image = document.getElementById("badgePopupImage");

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

// ============ VOUCHER SYSTEM WITH USAGE ============
function getUsedVouchers() {
  return JSON.parse(localStorage.getItem("usedVouchers")) || [];
}

function saveUsedVouchers(usedVouchers) {
  localStorage.setItem("usedVouchers", JSON.stringify(usedVouchers));
}

function useVoucher(voucherId) {
  if (isGuest || !currentUser) {
    alert("Vui lòng đăng nhập!");
    return;
  }
  
  const voucher = getVouchers().find(v => v.id === voucherId);
  if (!voucher) return;
  
  const userData = getUserData();
  if (userData.totalPoints < voucher.required) {
    alert("Bạn chưa đủ điểm để sử dụng voucher này!");
    return;
  }
  
  if (confirm(`Xác nhận sử dụng voucher "${voucher.title}"?\n\nVoucher sẽ được gửi đến quản lý để xác nhận.`)) {
    const usedVouchers = getUsedVouchers();
    usedVouchers.push({
      id: Date.now(),
      voucherId: voucherId,
      username: currentUser,
      timestamp: new Date().toISOString(),
      status: 'pending'
    });
    saveUsedVouchers(usedVouchers);
    
    // Notify admin
    addNotification('voucher', 
      `${currentUser} đã sử dụng voucher: ${voucher.title}`, 
      { voucherId: voucherId, username: currentUser }
    );
    
    alert("✅ Đã gửi yêu cầu sử dụng voucher!\nVui lòng liên hệ quầy để nhận ưu đãi.");
    renderVouchers();
  }
}

function renderVouchers() {
  if (isGuest) {
    document.getElementById("voucherList").innerHTML =
      '<div style="text-align:center;padding:20px;color:#64748b;">Đăng nhập để nhận voucher!</div>';
    return;
  }

  const userData = getUserData();
  const vouchers = getVouchers();
  const usedVouchers = getUsedVouchers();
  const list = document.getElementById("voucherList");

  list.innerHTML = vouchers
    .map((v) => {
      const unlocked = userData.totalPoints >= v.required;
      const used = usedVouchers.some(uv => 
        uv.voucherId === v.id && uv.username === currentUser && uv.status === 'used'
      );
      const pending = usedVouchers.some(uv => 
        uv.voucherId === v.id && uv.username === currentUser && uv.status === 'pending'
      );
      
      return `
            <div class="voucher-card ${unlocked ? "" : "voucher-locked"}">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="font-size:40px;">${v.badge}</div>
                    <div style="font-size:28px;font-weight:bold;">${v.value}</div>
                </div>
                <div style="font-size:16px;font-weight:600;margin-bottom:5px;">${v.title}</div>
                <div style="font-size:13px;opacity:0.9;margin-bottom:10px;">${v.desc}</div>
                ${used ? 
                  '<div style="background:rgba(107,114,128,0.3);padding:8px 12px;border-radius:8px;font-size:12px;display:inline-block;">✅ Đã sử dụng</div>' :
                  pending ?
                  '<div style="background:rgba(251,191,36,0.3);padding:8px 12px;border-radius:8px;font-size:12px;display:inline-block;">⏳ Chờ xác nhận</div>' :
                  unlocked ?
                  `<button onclick="useVoucher(${v.id})" style="width:100%;padding:10px;background:linear-gradient(135deg,#10b981 0%,#059669 100%);color:white;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;margin-top:5px;">🎁 Dùng ngay</button>` :
                  `<div style="background:rgba(0,0,0,0.2);padding:8px 12px;border-radius:8px;font-size:12px;display:inline-block;">🔒 Cần ${v.required} điểm</div>`
                }
            </div>
        `;
    })
    .join("");
}

function renderAdminVoucherUsage() {
  if (!isAdmin) return;
  
  const usedVouchers = getUsedVouchers().filter(uv => uv.status === 'pending');
  const container = document.getElementById('adminVoucherUsage');
  
  if (usedVouchers.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:#64748b;">Không có yêu cầu nào</div>';
    return;
  }
  
  const vouchers = getVouchers();
  
  container.innerHTML = usedVouchers.map(uv => {
    const voucher = vouchers.find(v => v.id === uv.voucherId);
    if (!voucher) return '';
    
    const timeAgo = getTimeAgo(new Date(uv.timestamp));
    
    return `
      <div style="background:white;border-radius:10px;padding:15px;margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;">
          <div>
            <div style="font-weight:600;color:#1e3c72;margin-bottom:5px;">${voucher.title}</div>
            <div style="font-size:13px;color:#64748b;">Người dùng: <strong>${uv.username}</strong></div>
            <div style="font-size:12px;color:#64748b;">${timeAgo}</div>
          </div>
          <div style="font-size:24px;">${voucher.badge}</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="confirmVoucherUsage(${uv.id})" 
                  style="flex:1;padding:8px;background:#10b981;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
            ✅ Xác nhận
          </button>
          <button onclick="rejectVoucherUsage(${uv.id})" 
                  style="flex:1;padding:8px;background:#ef4444;color:white;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
            ❌ Từ chối
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function confirmVoucherUsage(usageId) {
  const usedVouchers = getUsedVouchers();
  const usage = usedVouchers.find(uv => uv.id === usageId);
  if (usage) {
    usage.status = 'used';
    saveUsedVouchers(usedVouchers);
    renderAdminVoucherUsage();
    renderVouchers();
    alert("✅ Đã xác nhận sử dụng voucher!");
  }
}

function rejectVoucherUsage(usageId) {
  const usedVouchers = getUsedVouchers();
  const usage = usedVouchers.find(uv => uv.id === usageId);
  if (usage) {
    usage.status = 'rejected';
    saveUsedVouchers(usedVouchers);
    renderAdminVoucherUsage();
    alert("❌ Đã từ chối yêu cầu!");
  }
}

function adminSearchUser() {
  const username = document.getElementById('searchUsername').value.trim();
  if (!username) {
    alert("Vui lòng nhập tên người dùng!");
    return;
  }
  
  const usedVouchers = getUsedVouchers().filter(uv => 
    uv.username === username && uv.status === 'used'
  );
  
  const container = document.getElementById('userVoucherList');
  
  if (usedVouchers.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:20px;color:#64748b;">Người dùng "${username}" chưa sử dụng voucher nào</div>`;
    return;
  }
  
  const vouchers = getVouchers();
  
  container.innerHTML = `
    <h4 style="color:#1e3c72;margin:15px 0 10px 0;">Voucher đã dùng của ${username}:</h4>
    ${usedVouchers.map(uv => {
      const voucher = vouchers.find(v => v.id === uv.voucherId);
      if (!voucher) return '';
      
      const timeAgo = getTimeAgo(new Date(uv.timestamp));
      
      return `
        <div style="background:white;border-radius:10px;padding:12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:600;color:#1e3c72;font-size:14px;">${voucher.title}</div>
            <div style="font-size:12px;color:#64748b;">${timeAgo}</div>
          </div>
          <button onclick="deleteUsedVoucher(${uv.id})" 
                  style="padding:6px 12px;background:#ef4444;color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;">
            🗑️ Xóa
          </button>
        </div>
      `;
    }).join('')}
  `;
}

function deleteUsedVoucher(usageId) {
  if (!confirm("Xóa voucher này khỏi lịch sử?")) return;
  
  let usedVouchers = getUsedVouchers();
  usedVouchers = usedVouchers.filter(uv => uv.id !== usageId);
  saveUsedVouchers(usedVouchers);
  
  adminSearchUser(); // Refresh the list
  alert("✅ Đã xóa!");
}

function switchTab(tab) {
  if (isGuest && (tab === "checkin" || tab === "voucher" || tab === "admin")) {
    alert("Vui lòng đăng nhập!");
    return;
  }

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

  if (tab === "review") {
    document.getElementById("createReviewBtn").style.display = "block";
  } else {
    document.getElementById("createReviewBtn").style.display = "none";
  }
  
  if (tab === "admin") {
    renderAdminReports();
    renderAdminVoucherUsage();
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
    authorId: getUserSessionId(),
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

  const reactions = getReactions();
  const comments = getComments();
  const userSessionId = getUserSessionId();

  list.innerHTML = reviews
    .map((review) => {
      const timeAgo = getTimeAgo(new Date(review.timestamp));
      const categoryIcon =
        review.category === "food"
          ? "🍽️"
          : review.category === "wc"
            ? "🚻"
            : "📌";
      
      const reviewReactions = reactions.filter(r => r.reviewId === review.id);
      const likeCount = reviewReactions.filter(r => r.type === '❤️').length;
      const laughCount = reviewReactions.filter(r => r.type === '😂').length;
      const wowCount = reviewReactions.filter(r => r.type === '😮').length;
      
      const userLiked = reviewReactions.some(r => r.userId === userSessionId && r.type === '❤️');
      const userLaughed = reviewReactions.some(r => r.userId === userSessionId && r.type === '😂');
      const userWowed = reviewReactions.some(r => r.userId === userSessionId && r.type === '😮');
      
      const reviewComments = comments.filter(c => c.reviewId === review.id);

      return `
            <div data-review-id="${review.id}" style="background:white;border-radius:12px;padding:15px;margin-bottom:15px;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:16px;">${review.avatar}</div>
                        <div>
                            <div style="font-weight:600;color:#1e3c72;font-size:14px;">${review.author}</div>
                            <div style="font-size:12px;color:#64748b;">${timeAgo}</div>
                        </div>
                    </div>
                    <div style="display:flex;gap:8px;">
                        ${isAdmin && currentUser === "navigo" ? `<button onclick="deleteReview(${review.id})" style="background:#ef4444;color:white;border:none;padding:5px 12px;border-radius:8px;font-size:12px;cursor:pointer;">🗑️</button>` : ""}
                        <button onclick="openReportModal(${review.id}, 'review')" style="background:#f59e0b;color:white;border:none;padding:5px 12px;border-radius:8px;font-size:12px;cursor:pointer;">⚠️</button>
                    </div>
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
                
                <div style="display:flex;gap:12px;margin-top:15px;padding-top:12px;border-top:1px solid #e2e8f0;">
                    <button onclick="toggleReaction(${review.id}, '❤️')" 
                            style="flex:1;padding:8px;background:${userLiked ? '#fee2e2' : '#f8fafc'};border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;">
                        <span style="font-size:18px;">❤️</span>
                        ${likeCount > 0 ? `<span style="font-size:12px;color:#64748b;">${likeCount}</span>` : ''}
                    </button>
                    <button onclick="toggleReaction(${review.id}, '😂')" 
                            style="flex:1;padding:8px;background:${userLaughed ? '#fef3c7' : '#f8fafc'};border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;">
                        <span style="font-size:18px;">😂</span>
                        ${laughCount > 0 ? `<span style="font-size:12px;color:#64748b;">${laughCount}</span>` : ''}
                    </button>
                    <button onclick="toggleReaction(${review.id}, '😮')" 
                            style="flex:1;padding:8px;background:${userWowed ? '#dbeafe' : '#f8fafc'};border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;">
                        <span style="font-size:18px;">😮</span>
                        ${wowCount > 0 ? `<span style="font-size:12px;color:#64748b;">${wowCount}</span>` : ''}
                    </button>
                    <button onclick="openCommentInput(${review.id})" 
                            style="flex:1;padding:8px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;">
                        <span style="font-size:18px;">💬</span>
                        ${reviewComments.length > 0 ? `<span style="font-size:12px;color:#64748b;">${reviewComments.length}</span>` : ''}
                    </button>
                </div>
                
                <div class="comment-section" style="margin-top:12px;">
                    ${reviewComments.length > 0 ? `
                        <div style="padding-top:10px;border-top:1px solid #e2e8f0;">
                            ${reviewComments.map(comment => {
                                const commentTime = getTimeAgo(new Date(comment.timestamp));
                                return `
                                    <div style="background:#f8fafc;border-radius:10px;padding:10px;margin-bottom:8px;">
                                        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:5px;">
                                            <div style="font-weight:600;color:#1e3c72;font-size:13px;">${comment.author}</div>
                                            <div style="display:flex;gap:4px;">
                                                <span style="font-size:11px;color:#64748b;">${commentTime}</span>
                                                ${isAdmin ? `<button onclick="deleteComment(${comment.id})" style="background:#ef4444;color:white;border:none;padding:2px 6px;border-radius:4px;font-size:10px;cursor:pointer;">🗑️</button>` : ''}
                                                <button onclick="openReportModal(${comment.id}, 'comment')" style="background:#f59e0b;color:white;border:none;padding:2px 6px;border-radius:4px;font-size:10px;cursor:pointer;">⚠️</button>
                                            </div>
                                        </div>
                                        ${comment.text ? `<div style="font-size:13px;color:#1e293b;margin-bottom:5px;">${comment.text}</div>` : ''}
                                        ${comment.image ? `<img src="${comment.image}" style="max-width:150px;max-height:150px;border-radius:8px;margin-top:5px;">` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>
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