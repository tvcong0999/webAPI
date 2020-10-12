using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDBook.Models;

namespace CRUDBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowBooksController : ControllerBase
    {
        private readonly LoginContext _context;

        public BorrowBooksController(LoginContext context)
        {
            _context = context;
        }

        // GET: api/BorrowBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BorrowBook>>> GetBorrowBook()
        {
            return await _context.BorrowBook.ToListAsync();
        }

        // GET: api/BorrowBooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BorrowBook>> GetBorrowBook(int id)
        {
            var borrowBook = await _context.BorrowBook.FindAsync(id);

            if (borrowBook == null)
            {
                return NotFound();
            }

            return borrowBook;
        }

        // PUT: api/BorrowBooks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBorrowBook(int id, BorrowBook borrowBook)
        {
            if (id != borrowBook.Id)
            {
                return BadRequest();
            }

            _context.Entry(borrowBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BorrowBookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BorrowBooks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BorrowBook>> PostBorrowBook(BorrowBook borrowBook)
        {
            _context.BorrowBook.Add(borrowBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBorrowBook", new { id = borrowBook.Id }, borrowBook);
        }

        // DELETE: api/BorrowBooks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BorrowBook>> DeleteBorrowBook(int id)
        {
            var borrowBook = await _context.BorrowBook.FindAsync(id);
            if (borrowBook == null)
            {
                return NotFound();
            }

            _context.BorrowBook.Remove(borrowBook);
            await _context.SaveChangesAsync();

            return borrowBook;
        }

        private bool BorrowBookExists(int id)
        {
            return _context.BorrowBook.Any(e => e.Id == id);
        }
    }
}
