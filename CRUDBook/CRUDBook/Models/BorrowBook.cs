using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDBook.Models
{
    public class BorrowBook
    {
        [Key]
        public int Id { get; set; }
        public int iduser { get; set; }
        public int idbook { get; set; }
        public DateTime date { get; set; }

    }
}
