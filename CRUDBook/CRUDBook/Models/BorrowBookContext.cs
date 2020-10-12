using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDBook.Models
{
    public class BorrowBookContext:DbContext
    {
        public BorrowBookContext(DbContextOptions<BookDetailContext> options) : base(options)
        { }

        public DbSet<BorrowBook> BorrowBook { get; set; }
    }
}
