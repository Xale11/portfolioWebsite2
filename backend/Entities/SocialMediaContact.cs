namespace backend.Entities;

public class SocialMediaContact
{
  public int Id { get; set; }
  public required string Platform { get; set; }
  public required string Username { get; set; }
  public required string Url { get; set; }
  public Profile? Profile { get; set; }
}