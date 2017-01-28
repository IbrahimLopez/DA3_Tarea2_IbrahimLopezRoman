using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ejemplo.Models
{
    public class estados
    {
        [Key]
        public int estadoID { get; set; }
        public string nombreEstado { get; set; }

        //Un estado tiene una coleccion de municipios
        virtual public ICollection<municipios> municipios { get; set; }
        
    }
}