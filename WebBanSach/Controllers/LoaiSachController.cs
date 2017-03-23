using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebBanSach.Models;

namespace WebBanSach.Controllers
{
    public class LoaiSachController : Controller
    {
        WebBanSachEntities db = new WebBanSachEntities();
        // GET: LoaiSach
        public ActionResult Index()
        {
            return View();
        }
        public PartialViewResult LoaiSachPartial()
        {
            var loaisach = db.LoaiSaches.ToList();
            var chude = db.ChuDes.ToList();
            ViewBag.Chude = chude;
            return PartialView(loaisach);
        }

        public ActionResult LoaiSach_Sach(int? loaisachId)
        {
            var loaisach_sach = db.loaisach_sach(loaisachId).ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_tacgia = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < loaisach_sach.Count; i++)
            {
                var sach = db.Sach_Tacgia_Thamgia(loaisach_sach[i].MaSach).ToList();
                sach_tacgia.Add(sach[0]);
            }
            return View(sach_tacgia);
        }
        public JsonResult Test(int ? loaisachId)
        {
            var loaisach_sach = db.loaisach_sach(loaisachId).ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_tacgia = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < loaisach_sach.Count; i++)
            {
                var sach = db.Sach_Tacgia_Thamgia(loaisach_sach[i].MaSach).ToList();
                sach_tacgia.Add(sach[0]);
            }
            return Json(sach_tacgia,JsonRequestBehavior.AllowGet);
        }
        public ActionResult Ls_chude_sach(int?loaisachId,int? MaChuDe)
        {
            var chude_sach = db.chude_sach(MaChuDe).ToList();
            List<Sach_Tacgia_Thamgia_Result> sach_chude = new List<Sach_Tacgia_Thamgia_Result>();
            for (int i = 0; i < chude_sach.Count; i++)
            {
                var sach = db.Sach_Tacgia_Thamgia(chude_sach[i]).ToList();
                sach_chude.Add(sach[0]);
            }
            return View(sach_chude);
        }
    }
}