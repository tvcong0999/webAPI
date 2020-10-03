using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDBook.Models
{
    public class BookDetailContext : DbContext
    {
        public BookDetailContext(DbContextOptions<BookDetailContext> options) : base(options)
        { }

        public DbSet<BookDetail> BookDetails { get; set; }
    }
}
