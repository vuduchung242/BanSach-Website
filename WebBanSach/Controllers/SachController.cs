using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebBanSach.Models;

namespace WebBanSach.Controllers
{
    public class SachController : Controller
    {
        WebBanSachEntities db = new WebBanSachEntities();
        // GET: Sach
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult All_Sach()
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
    }
}