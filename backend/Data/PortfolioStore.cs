using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class PortfolioDb(DbContextOptions<PortfolioDb> options) : DbContext(options)
{
  public DbSet<Project> Projects{ get; set; }
  public DbSet<Profile> Profiles { get; set; }
  public DbSet<Service> Services { get; set; }
  public DbSet<SocialMediaContact> SocialMediaContacts { get; set;}
  
  public void onModelCreating(ModelBuilder modelBuilder)
  {

  }
}