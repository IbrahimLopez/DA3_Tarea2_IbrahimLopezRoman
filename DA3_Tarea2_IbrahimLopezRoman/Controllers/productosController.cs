using Ejemplo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ejemplo.Controllers
{
    public class productosController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: productos

        public JsonResult getJsonList()
        {
            var productos = db.productos.ToList();
            return Json(productos, JsonRequestBehavior.AllowGet);

        }
       
        [HttpPost]
        public JsonResult createProducto(productos producto)
        {
            var respuesta = new { funciono = false };

            try
            {
                db.productos.Add(producto);
                int registrosModificados = db.SaveChanges();

                //Se logro ejecutar el query, pero se hicieron los cambios?
                if (registrosModificados > 0)
                {
                    respuesta = new { funciono = true };
                }
            }
            catch { }
            
            return Json(respuesta);
        }
        [HttpGet]
        public JsonResult editarProducto(int id)
        {
            var productoBuscado = db.productos.Find(id);
            var resultado = new { id = productoBuscado.id, nombre = productoBuscado.nombreProducto, precio = productoBuscado.precioProducto };

            return Json(resultado, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        //[ActionName("editarProducto")]
        public JsonResult editar(productos producto)
        {
             //var id = producto.id;
             //var productoEditado = db.productos.Find(id);
             var resultado= db.Entry(producto).State = EntityState.Modified;
             db.SaveChanges();

             return Json(resultado, JsonRequestBehavior.AllowGet);
      
        }

        [HttpPost]
        public JsonResult eliminarProducto(int id)
        {
           productos productoBuscado = db.productos.Find(id);
            var resultado = db.productos.Remove(productoBuscado);
            db.SaveChanges();
            return Json(resultado,JsonRequestBehavior.AllowGet);
        }
        public class AllowCrossSiteJsonAtribute : ActionFilterAttribute
        {
            public override void OnActionExecuting(ActionExecutingContext filterContext)
            {
                filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
                base.OnActionExecuting(filterContext);
            }
        }
    }
}