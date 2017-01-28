using Ejemplo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ejemplo.Controllers
{
    public class especificacionesController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        // GET: Especificaciones
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getEspecificaciones(int? id)
        {
            if (id == null)
            {
                var esp = db.especificaciones.ToList();
                return Json(esp, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var esp = db.especificaciones.Find(id);
                return Json(esp, JsonRequestBehavior.AllowGet);
            }


        }
    }
}