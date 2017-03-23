using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebBanSach.Models;

namespace WebBanSach.Controllers
{
    public class HomeController : Controller
    {
        WebBanSachEntities db = new WebBanSachEntities();
        // GET: /Home/
        public ActionResult Index()
        {
            var Sach = db.Saches.ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_tacgia = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < Sach.Count; i++)
            {
                var sachtg = db.Sach_Tacgia_Thamgia(Sach[i].MaSach).ToList();
                sach_tacgia.Add(sachtg[0]);
            }
            return View(sach_tacgia);
        }
        public ActionResult Timer()
        {
            return Content(DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"));
        }
        public JsonResult Sach()
        {
            var Sach = db.Saches.ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_tacgia = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < Sach.Count; i++)
            {
                var sachtg = db.Sach_Tacgia_Thamgia(Sach[i].MaSach).ToList();
                sach_tacgia.Add(sachtg[0]);
            }
            return Json(sach_tacgia, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Test(int? loaisachId)
        {
            var loaisach_sach = db.loaisach_sach(loaisachId).ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_tacgia = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < loaisach_sach.Count; i++)
            {
                var sach = db.Sach_Tacgia_Thamgia(loaisach_sach[i].MaSach).ToList();
                sach_tacgia.Add(sach[0]);
            }
            return Json(sach_tacgia, JsonRequestBehavior.AllowGet);
        }
    }
}