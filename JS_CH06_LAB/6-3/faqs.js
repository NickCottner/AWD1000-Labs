"use strict";
const $ = (id) => document.getElementById(id);


window.onload = function()
{
	let faqs = $("faqs");

	let h2Elements = faqs.getElementsByTagName("h2");

	function showFaqAndHideOthers()
	{     
		let h2;  

		for(let i = 0; i < h2Elements.length; i++)
		{   
	  		h2 = h2Elements[i];
	  		if(h2 == this)
	  		{                        
				if(!h2.hasAttribute("class"))
				{       
		  			hideFAQ(h2);                      
				} 
				else
				{                              
		 			showFAQ(h2);                      
				}
	  		} 
	  		else
	 		{                 
				hideFAQ(h2);
	  		}	
		}
	}

	let showFAQ = (h2) =>
	{
	 	let div = h2.nextElementSibling;
	 	h2.removeAttribute("class")
	 	div.setAttribute("class", "open");
	}

	let hideFAQ = (h2) =>
	{
		let div = h2.nextElementSibling;
		h2.setAttribute("class", "minus")
		div.removeAttribute("class");
	}


	// attach event handler for each h2 tag and init classes   
	for (let i = 0; i < h2Elements.length; i++ ) 
	{
	 	h2Elements[i].onclick = showFaqAndHideOthers;
	 	hideFAQ(h2Elements[i]);
	}
 	h2Elements[0].firstChild.focus();
};

let toggle = () =>
{
 	let h2 = this;

 	let div = h2.nextElementSibling;

	if (h2.hasAttribute("class")) 
	{
 		h2.removeAttribute("class");
	} 
	else 
	{
 		h2.setAttribute("class", "minus");
	}

	if (div.hasAttribute("class")) 
	{	
 		div.removeAttribute("class");
	} 
	else 
	{
 		div.setAttribute("class", "open");
	}
	for (let i = 0; i < h2Elements.length; i++ ) 
	{
		h2Elements[i].onclick = toggle;
	}
};
