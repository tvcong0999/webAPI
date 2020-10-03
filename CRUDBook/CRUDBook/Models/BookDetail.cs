using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDBook.Models
{
    public class BookDetail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(30)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Author { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Category { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Publisher { get; set; }
    }
}
