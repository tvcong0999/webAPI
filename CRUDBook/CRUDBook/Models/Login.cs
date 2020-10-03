using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDBook.Models
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string user { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string pass { get; set; }

    }
}
