namespace WhaleSpotting.Models.Response;

public class SingleSightingResponse
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Username { get; set; } = "Unknown User";
    public int SpeciesId { get; set; }
    public string SpeciesName { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string PhotoUrl { get; set; }
    public string? Description { get; set; }
    public DateTime DateTime { get; set; }
    public bool IsApproved { get; set; }
}
