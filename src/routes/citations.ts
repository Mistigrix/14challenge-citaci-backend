import { Router } from 'express';
import {
  getRandomCitation,
  getCitations,
  getCitationById,
  createCitation,
  bulkCreateCitations,
  updateCitation,
  deleteCitation,
  bulkDeleteCitations,
} from '../controllers/citationsController';

const router = Router();

router.get('/random', getRandomCitation);
router.get('/', getCitations);
router.post('/bulk', bulkCreateCitations);
router.delete('/bulk', bulkDeleteCitations);
router.get('/:id', getCitationById);
router.post('/', createCitation);
router.put('/:id', updateCitation);
router.delete('/:id', deleteCitation);

export default router;
