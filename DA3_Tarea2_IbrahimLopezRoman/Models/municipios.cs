using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ejemplo.Models
{
    public class municipios
    {
        [Key]
        public int municipioID { get; set; }
        public string nombreMunicipio { get; set; }

        //Relacion entre municpios y estados
        public virtual estados estado { get; set; }
        public int estadoID { get; set; }
    }
}