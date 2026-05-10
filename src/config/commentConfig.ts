import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk，默认为none，即不启用评论系统
	type: "twikoo",

	//twikoo评论系统配置，版本1.7.4
	twikoo: {
		envId: "https://twikoo.yzhdemeng.dpdns.org",
		// 设置 Twikoo 评论系统语言
		lang: "zh-CN",
		// 是否启用文章访问量统计功能
		visitorCount: true,
	}
};
