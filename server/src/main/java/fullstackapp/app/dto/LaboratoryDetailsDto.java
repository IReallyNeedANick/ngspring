package fullstackapp.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

//@NoArgsConstructor
@AllArgsConstructor
@Data
public class LaboratoryDetailsDto {
	private String name;
	private Long id;
	private Date time;
	private LaboratoryStatusEnum status;
	private String ordererName;
	private Date orderDate;
}
