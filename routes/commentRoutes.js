import express from 'express';
const router = express.Router();
import commentController from '../controllers/commentController.js';

// 게시물 댓글 조회 라우트 (/api/posts/comments)
router.get('/comments',commentController.getComments);

// 댓글 작성 라우트 (/api/posts/comments)
router.post('/comments',commentController.createComment);

// 댓글 수정 라우트 (/api/posts/comments/:comment_id)
router.put('/comments/:comment_id', commentController.updateComment);

// 댓글 삭제 라우트
router.delete('/comments/:comment_id', commentController.deleteComment);

export default router;