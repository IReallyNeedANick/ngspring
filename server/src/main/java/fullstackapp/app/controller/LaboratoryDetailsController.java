package fullstackapp.app.controller;


import fullstackapp.app.dto.LaboratoryDetailsDto;
import fullstackapp.app.dto.LaboratoryStatusEnum;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.*;

@RestController()
public class LaboratoryDetailsController {

	private Map<Long, LaboratoryDetailsDto> details = new HashMap<>();

	@PostConstruct
	public void initDatabase() {
		LaboratoryDetailsDto pek = new LaboratoryDetailsDto("PEK", 1L, new Date(), LaboratoryStatusEnum.IN_PROGRESS, "Boris Marn", new Date());
		LaboratoryDetailsDto knms = new LaboratoryDetailsDto("KNMS", 2L, new Date(), LaboratoryStatusEnum.IN_PROGRESS, "doc. Freak", new Date());
		LaboratoryDetailsDto kikkb = new LaboratoryDetailsDto("KIKKB", 3L, new Date(), LaboratoryStatusEnum.IN_PROGRESS, "Potato potato", new Date());

		Arrays.asList(pek, knms, kikkb).forEach(lab -> details.put(lab.getId(), lab));

	}


	@GetMapping
	public Collection<LaboratoryDetailsDto> getLabs() {
		return details.values();
	}

//	@GetMapping
//	public Collection<LaboratoryDetailsDto> getLab() {
//		return details.values();
//	}




}
