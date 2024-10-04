namespace backend.Entities;

public class Profile
{
  public int Id { get; set; }
  public required string Name { get; set; }
  public required string LongDescription { get; set; }
  public required string ShortDescription { get; set; }
  public required string[] KeySkills { get; set; }
  public required string[] OtherSkills { get; set; }
  public required string CvUrl { get; set; }
  public required int YearsCoding { get; set; }
  public required int YearsWebDev { get; set; }
  public required string PhoneNumber { get; set; }
  public required string Email { get; set; }
  public required string Address { get; set; }
  public ICollection<SocialMediaContact> SocialMediaContacts { get; set; } = new List<SocialMediaContact>();

}