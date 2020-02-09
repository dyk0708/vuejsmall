import {request} from "./request.js";

export function getdetails(iid) {
	return request({
		url: 'api/hy/detail',
		params: {
			iid
		}
	})
}

export function getRecommend(){
	return request({
		url: 'api/hy/recommend',
	})
}

export class goods{
	constructor(itemInfo, columns, services) {
	    this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.realPrice = itemInfo.lowNowPrice
		this.columns = columns
		this.services = services
	}
}

export class shops{
	constructor(shopInfo) {
	    this.fans = shopInfo.cFans
		this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodscount = shopInfo.cGoods
	}
}

export class goodsparam {
	constructor(info, rule) {
		this.image = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}
